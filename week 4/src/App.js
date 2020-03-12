import React from "react";
import "./App.css";
import image from './image/IMG_20190610_214628_071.jpg'

function App() {
  return (
    // <div className="container">
    //   <div className="card">
    //     <div className="card-body">
    //       <img src={image} alt=""/>
    //       <div className="card-text">
    //         Nama Ineke Susilowati<br></br>
    //         NIM  1741720022 <br></br>
    //         Kelas TI-3G
    //         </div>
    //     </div>
    //   </div>
    // </div>
    <div>
       <div className="about text-center">
       <div className="container">
            <div className="card-body">
                <h2>Biodata</h2>
            </div>
        </div>
                    <div className="Biodata">           
                        <img width={150} height={178} src={image}/> 
                    </div>
                    <div className="penjelasan">
                        <h1 >INEKE SUSILOWATI</h1>
                        <div className="subheading">
                            <a href="mailto:inekesusilowati89@gmail.com">inekesusilowati89@gmail.com</a>
                            <a><br/><br/><br/><br/></a>
                        </div>
                        <p className="lead mb-5">
                        Ineke Susilowati <br></br>
                        Nim 1741720022<br></br>
                        Kelas TI-3G
                        </p>
                    </div>
                    <div className="sosmed">
                        <a href="#">
                            <i className="fa fa-instagram fa-3x"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-whatsapp fa-3x"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-envelope fa-3x"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-twitter fa-3x"></i>
                        </a>
                        <a href="#">
                            <i className="fa fa-facebook fa-3x"></i>
                        </a>
                    </div>
                </div>
    </div>
  );
}

export default App;
