"use strict";(self.webpackChunkalbw_reader=self.webpackChunkalbw_reader||[]).push([[512],{379:(e,s,l)=>{l.r(s),l.d(s,{default:()=>t});var o=l(43),r=l(462),a=l(394),n=l(325),i=l(579);const t=()=>{const[e,s]=(0,o.useState)(void 0),l=(e,l)=>{console.log("File name: %c"+l.name,"color: #42f578"),console.log("Last modified: %c"+l.lastModifiedDate,"color: #42f578"),console.log("\nSeed: %c"+e.seed||0,"color: #42f578"),console.log("Version: %c"+e.version||0,"color: #42f578"),console.log("Hash: %c"+e.hash||0,"color: #42f578"),console.log("Settings: \n%c"+JSON.stringify(e.settings,null,2)||0,"color: #42f578"),console.log("Exclusions: \n%c"+JSON.stringify(e.full_exclusions,null,2)||0,"color: #42f578"),console.log("Treacherous tower floors: \n%c"+JSON.stringify(e.treacherous_tower_floors,null,2)||0,"color: #42f578"),console.log("Trials config: \n%c"+JSON.stringify(e.trials_config,null,2)||0,"color: #42f578"),s(e)};return(0,i.jsx)("section",{className:"App",children:(0,i.jsx)("div",{children:void 0===e?(0,i.jsxs)("div",{className:"reader-imports",children:[(0,i.jsx)("div",{className:"reader-choosefile",children:(0,i.jsxs)("label",{htmlFor:"file-upload",className:"custum-file-upload",children:[(0,i.jsx)("div",{className:"reader-icon",children:(0,i.jsx)(r.Qio,{})}),(0,i.jsx)("div",{className:"reader-txt",children:(0,i.jsx)("span",{children:"Click to upload a JSON file."})}),(0,i.jsx)("input",{id:"file-upload",type:"file",name:"Import JSON Spoiler Logs",onChange:e=>{var s;const o=e.target.files[0];if(null!==o&&void 0!==o&&null!==(s=o.name)&&void 0!==s&&s.endsWith(".json")){const e=new FileReader;e.onload=e=>{try{const s=JSON.parse(e.target.result);let r=!1;["seed","layout"].forEach((e=>{s.hasOwnProperty(e)||(r=!0)})),r?alert("Required properties are missing."):l(s,o)}catch(s){alert("Error parsing JSON: "+s)}},e.readAsText(o)}else alert("This type of file is not compatible. Please use only .json files !")}})]})}),(0,i.jsx)("h4",{children:"OR"}),(0,i.jsxs)("div",{className:"reader-dnd",onDrop:e=>{var s;e.preventDefault();const o=e.dataTransfer.files[0];if(null!==o&&void 0!==o&&null!==(s=o.name)&&void 0!==s&&s.endsWith(".json")){const e=new FileReader;e.onload=e=>{try{const s=JSON.parse(e.target.result);let r=!1;["seed","layout"].forEach((e=>{s.hasOwnProperty(e)||(r=!0)})),r?alert("Required properties are missing."):l(s,o)}catch(s){alert("Error parsing JSON: "+s)}},e.readAsText(o)}else alert("This type of file is not compatible. Please use only .json files !")},onDragOver:e=>e.preventDefault(),children:[(0,i.jsx)("div",{className:"reader-icon",children:(0,i.jsx)(a.LEk,{})}),(0,i.jsx)("div",{className:"reader-txt",children:(0,i.jsx)("span",{children:"Drag and Drop it !"})})]})]}):(0,i.jsx)(n.A,{data:e,reset:s})})})}}}]);
//# sourceMappingURL=512.168b6375.chunk.js.map