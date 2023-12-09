import React, { useState } from 'react';
import './CSS/Testimonials.css'


export function Testimonials (){
    
    const Testi=[
        {id:0,value:"Testi1"},
        {id:1,value:"Testi2"},
        {id:2,value:"Testi3"},
        {id:3,value:"Testi4"},
        {id:4,value:"Testi5"},
        {id:5,value:"Testi6"},
    ];

    const [wordData,setWordData]=useState(Testi[0].value)

    const handleClick=(index)=>{
        console.log(index)
        const TesSlider=Testi[index].value
        setWordData(TesSlider)
    }
    
    return(
        <div className="Tapp">
            <div>{wordData}</div>
            <div className='flex_row'>
                {Testi.map((data,i)=>
                    <h1 key={i} onClick={()=>{handleClick(i)}} >.</h1>
                )} 
            </div>
        </div>
    )
}