import React, { useState, useEffect } from "react";

function App() {
  const [dogPic, setDogPic] = useState("");
  
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
        
      })
      .catch((error) => {
        console.error("Error fetching dog picture:", error);
        setLoadingPic(false);
      });
  }, []);

  if (!dogPic) {
    return <p>Loading...</p>;}

  return (
    <div>
        <h1>Dog Finder</h1>
        <img src={dogPic} alt="A Random Dog" />
    </div>
  )
}

export default App;
