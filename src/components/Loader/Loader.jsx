import "./Loader.css";

const Loader = () => {
  return (
    <div className="container-loader">
      <svg className="svg-loader" viewBox="25 25 50 50">
        <circle className="circle-loader" r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
};

export default Loader;
