import React, { useState, useEffect } from 'react';
import './_List.scss';
import axios from 'axios';


export default function List() {    
   


    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get("/list")
        .then((list)=> setList(list.data));
      },[]) 

        return (
            <div className="list">
                <h1>To do List</h1>
                {/* Check to see if any items are found*/}
                {list.length ? (
                    <div>
                        {/* Render the list of items */}
                        {list.map((item) => {
                            return (
                                <div>
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div>
                        <h2>No List Items Found</h2>
                    </div>
                )
                }
            </div>
        );
    
}

