import React, {useEffect, useState} from 'react';
import './App.css';
import Nav from './Nav.js';

function App() {

  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  // const ACCOUNT_ID = "7cd245d-7f4f-43b7-be62-2b32bad53e22"
  const APP_KEY = "mbp7kqm13jS2IMEj6fqaLGIoh9YFWzCPr1Vr1qpw"
    const fetchData = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`);
      const data = await response.json();
      const photoUrl = await data.url;
      console.log(data);
      setPhotoData(photoUrl);
  }

  var divStyle = {
    backgroundImage: `url(${photoData})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh'
  }

  return (
    <div className="mainDiv" style={divStyle}>
      <Nav />
      {/* <img className="photoOfTheDay" src={photoData} alt="NASA's Photo of The Day" /> */}
    </div>
  );
}

export default App;
