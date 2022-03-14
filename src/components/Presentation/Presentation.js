import './_Presentation.scss'
import React, { useState, UseEffect, useEffect } from 'react';
import Splash from '../Splash/Splash';
import Typewriter from 'typewriter-effect';



export default function TestLoader(){
    const [isLoading, setLoading] = useState(true);
    function fakeRequest(){
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }

    useEffect(()=> {
        fakeRequest().then(() => {
            const el = document.querySelector(".loader");
            if (el) {
              el.remove();
              setLoading(!isLoading);
            }
          });
        }, []);
      
        if (isLoading) {
          return <Splash/>;
        }
      
        return (
          <div className="presentation">
            <h1>
          <Typewriter
  options={{
    strings: ['Hello World', 'Hello Leaks'],
    autoStart: true,
    loop: true,
  }}
/></h1>
       
          </div>
        );
    }