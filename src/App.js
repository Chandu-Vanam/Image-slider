import "./App.css";
import { useState } from "react";

const headings = ['Nature Waters Lake','Lake Sunset Sillhouette','sunset Tree Water','Beach Sea Sunset','Beach Sea Ocean','Sunset Beach Sky'];

const images = [];
for (let i = 1; i <= 6; i++) {
  images.push(require(`./images/bg${i}.jpg`));
}

function App() {

  const [imageInd, setImageInd] = useState(0);

  const imagePrev = () => {
    setImageInd(imageInd <= 0?images.length-1:imageInd - 1);
  };
  
  const imageNext = () => {
    setImageInd(imageInd >= images.length-1 ? 0:imageInd + 1);
  };

  return (
    <div className="App">
      <h1 id="heading">{headings[imageInd]}</h1>
      <div className="container">
        <button id="left-btn" onClick={imagePrev}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <img src={images[imageInd]} alt="file not Found" />
        <button id="right-btn" onClick={imageNext}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
