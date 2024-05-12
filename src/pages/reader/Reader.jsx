import "./Reader.css";
import { useState } from "react";

import { BsFiletypeJson } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";

import ReadSeed from "../../components/ReadSeed/ReadSeed";

const Reader = () => {
  const [file, setFile] = useState(undefined);

  const handleFile = (f, e) => {
    // Just some file infos
    console.log("File name: %c" + e.name, "color: #42f578");
    console.log("Last modified: %c" + e.lastModifiedDate, "color: #42f578");
    console.log("\nSeed: %c" + f.seed || "Not Found", "color: #42f578");
    console.log("Version: %c" + f.version || "Not Found", "color: #42f578");
    console.log("Hash: %c" + f.hash || "Not Found", "color: #42f578");
    console.log(
      "Settings: \n%c" + JSON.stringify(f.settings, null, 2) || "Not Found",
      "color: #42f578"
    );
    console.log(
      "Exclusions: \n%c" + JSON.stringify(f.full_exclusions, null, 2) ||
        "Not Found",
      "color: #42f578"
    );
    console.log(
      "Treacherous tower floors: \n%c" +
        JSON.stringify(f.treacherous_tower_floors, null, 2) || "Not Found",
      "color: #42f578"
    );
    console.log(
      "Trials config: \n%c" + JSON.stringify(f.trials_config, null, 2) ||
        "Not Found",
      "color: #42f578"
    );

    setFile(f);
  };

  return (
    <section className="App">
      <div>
        {file === undefined ? (
          <div className="reader-imports">
            <div className="reader-choosefile">
              <label htmlFor="file-upload" className="custum-file-upload">
                <div className="reader-icon">
                  <BsFiletypeJson />
                </div>
                <div className="reader-txt">
                  <span>Click to upload a JSON file.</span>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  name="Import JSON Spoiler Logs"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file?.name?.endsWith(".json")) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        try {
                          const newData = JSON.parse(event.target.result);
                          let dontPass = false;
                          ["seed", "layout"].forEach((prop) => {
                            if (!newData.hasOwnProperty(prop)) {
                              dontPass = true;
                            }
                          });
                          if (!dontPass) handleFile(newData, file);
                          else alert("Required properties are missing.");
                        } catch (error) {
                          alert("Error parsing JSON: " + error);
                        }
                      };
                      reader.readAsText(file);
                    } else {
                      alert(
                        "This type of file is not compatible. Please use only .json files !"
                      );
                    }
                  }}
                />
              </label>
            </div>
            <h4>OR</h4>
            <div
              className="reader-dnd"
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile?.name?.endsWith(".json")) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    try {
                      const newData = JSON.parse(event.target.result);
                      let dontPass = false;
                      ["seed", "layout"].forEach((prop) => {
                        if (!newData.hasOwnProperty(prop)) {
                          dontPass = true;
                        }
                      });
                      if (!dontPass) handleFile(newData, droppedFile);
                      else alert("Required properties are missing.");
                    } catch (error) {
                      alert("Error parsing JSON: " + error);
                    }
                  };
                  reader.readAsText(droppedFile);
                } else {
                  alert(
                    "This type of file is not compatible. Please use only .json files !"
                  );
                }
              }}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="reader-icon">
                <IoCloudUploadOutline />
              </div>
              <div className="reader-txt">
                <span>Drag and Drop it !</span>
              </div>
            </div>
          </div>
        ) : (
          <ReadSeed data={file} reset={setFile} />
        )}
      </div>
    </section>
  );
};

export default Reader;
