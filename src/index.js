import React from 'react';
import ReactDOM from 'react-dom/client';
import dog1 from './assets/Images/dog-1.jpeg';
import dog2 from './assets/Images/dog-2.jpeg';
import dog3 from './assets/Images/dog-3.jpeg';
import dog4 from './assets/Images/dog-4.jpeg';
import dog5 from './assets/Images/dog-5.jpeg';
import dog6 from './assets/Images/dog-6.jpeg';
import dog7 from './assets/Images/dog-7.jpeg';
import dog8 from './assets/Images/dog-8.jpeg';


const root = ReactDOM.createRoot(document.getElementById("root"))

function Dog(props){
    return(
        <div style={{border : "1px solid black", width : "250px", display : 'flex', flexDirection: "column" , justifyContent: 'center', alignItems : 'center'}}>
            <img src={props.image} alt="image-1" style={{ width : "230px", height: "180px",margin : "3px"}} />
            <h1 style={{textAlign : "center"}}>{props.name}</h1>
        </div>
    )
}
var dogs = [
    { image: dog1, name: "Corgi" },
    { image: dog2, name: "Pomeranian" },
    { image: dog3, name: "Cavapoo" },
    { image: dog4, name: "Shih Tzu" },
    { image: dog5, name: "Maltipoo" },
    { image: dog6, name: "Cockapoo" },
    { image: dog7, name: "French Bulldog" },
    { image: dog8, name: "Bichon Frise" }
]

root.render(
    <div style={{display : "flex", flexWrap : "wrap", gap : "20px", alignItems : "center", justifyContent : "center"}}>
        {
            dogs.map(function(items){
                return<Dog image = {items.image} name = {items.name}></Dog>
            })
        }
    </div>
)