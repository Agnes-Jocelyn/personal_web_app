import React, { Component } from 'react'
import './style.css'
import Gambar4 from './Assets/profile2.png'
import Gambar1 from './Assets/3.jpg'
import Gambar2 from './Assets/4.jpg'
import Gambar3 from './Assets/6.jpg'
import Gallery1 from './Assets/Gallery1.jpg'
import Gallery2 from './Assets/Gallery2.jpg'
import Gallery3 from './Assets/Gallery3.jpg'
import Gallery4 from './Assets/Gallery4.jpg'
import Gallery5 from './Assets/Gallery5.jpg'
import Gallery6 from './Assets/Gallery6.jpg'

 class Content extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={Gambar4}  className="icon"/>
                    <h1>Welcome To My Personal Website</h1>
                </div>
                <h2>About</h2>
                <hr/>
            <section>
                <div className="col">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col">
                    <img src={Gambar1} className="gmbrabout" />
                </div>
                <div className="col">
                    <img src={Gambar2} className="gmbrabout" />
                </div>
                <div className="col">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                    ugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="col">
                    <img src={Gambar3} className="gmbrabout" />
                </div>
            </section>
            <h2>Gallery</h2>
            <hr/>
            <section>
                <div>
                    <img src={Gallery1} className="gallery"/>                
                    <img src={Gallery2} className="gallery"/>
                    <img src={Gallery3} className="gallery"/>
                    <img src={Gallery4} className="gallery"/>                
                    <img src={Gallery5} className="gallery"/>
                    <img src={Gallery6} className="gallery"/>
                    </div>
            </section>
        </div>
        )
    }
}

export default Content