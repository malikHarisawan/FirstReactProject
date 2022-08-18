import React from 'react';

import card from './card.png';

export default function Img(){

    return (

  <div className="container bg-dark text-white">

    <div className="card bg-dark text-center" id='card' >
    
    <img id='card-img' src={card} alt="card-img" className=" card-img-top rounded " >
    </img>

    <div class="card-body mt-3">
    <h2 >Haris Malik  </h2>

    <p  >Frontend Engineer</p>

    <button className=" btn btn-dark m-3"><i className="bi bi-envelope p-2"></i>Email</button>
    <button className=" btn btn-primary"><i className="bi bi-linkedin p-2"></i>Linkdin</button>
        <div className="card-text">
            <h3>About</h3>
    <p> Student of Computer Science who is learning technologies so I can build something that create value to the world </p>
    
    <h3>Interest</h3>
    <p> I love Playing  and watching Cricket
          also I like traveling , watching movies   </p>
    
    </div>

    <div className="cord-footer">
        <button className='btn btn-dark m-1'><i className='bi bi-twitter'></i></button>
        <button className='btn btn-dark m-1'><i className='bi bi-facebook'></i></button>
        <button className='btn btn-dark m-1'><i className='bi bi-instagram'></i></button>
        <button className='btn btn-dark m-1'><i className='bi bi-github'></i></button>
    </div>


    </div>



    </div>

  </div>
        
    )
} 
