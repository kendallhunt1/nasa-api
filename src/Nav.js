import React, {useState, useEffect} from 'react';

function Nav() {

    const [photoTitle, setPhotoTitle] = useState();
    const [photoDescription, setPhotoDescription] = useState();

    useEffect(() => {
        fetchData();
    }, [])

    const APP_KEY = "mbp7kqm13jS2IMEj6fqaLGIoh9YFWzCPr1Vr1qpw"
    const fetchData = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${APP_KEY}`);
      const data = await response.json();
      const photoExplanation = await data.explanation;
      const photoTitleApi = await data.title;
      setPhotoTitle(photoTitleApi);
      setPhotoDescription(photoExplanation);
    }

    return (
        <div className="navWrapper">
            <div className="navBarLeftWrapper">
                <div className="navBarLeft">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" alt="Nasa Logo"/>
                    <h3>NASA Photo of the Day</h3>
                </div>
            </div>
            <div className="navBarRight">
                <div className="rightSideNavBox">
                    <h3 id="title">{photoTitle}</h3>
                </div>
                <div className="rightSideNavBox1">
                    <p id="description">{photoDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default Nav;