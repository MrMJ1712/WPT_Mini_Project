import React, { useState } from 'react';
import './CSS/Testimonials.css'


export function Testimonials() {

    const Testi = [
        { id: 0, value: "TEst"}, 
        { id: 1, value: "The electronic auction platform developed by NIC for use by Government is very versatile. It provides Dynamic environment for auction, conduct of auction is Transparent to the bidders Quite User Friendly and has fetched Higher prices . West Bengal Housing Infrastructure Development Corporation has benefitted a lot using this platform. Best wishes to NIC. - DILIP KUMAR BAKSHI, General Manager (C), West Bengal Housing Infrastructure Development Corporation" },
        { id: 2, value: "Testi3" },
        { id: 3, value: "Testi4" },
        { id: 4, value: "Testi5" },
        { id: 5, value: "Testi6" },
    ];

    const [wordData, setWordData] = useState(Testi[0].value)

    const handleClick = (index) => {
        console.log(index)
        const TesSlider = Testi[index].value
        setWordData(TesSlider)
    }

    return (
        <div className="Tapp">
            <div><p>{wordData}</p></div>
            <div className='flex_row'>
                {Testi.map((data, i) =>
                    <h1 key={i} onClick={() => { handleClick(i) }} >.</h1>
                )}
            </div>
        </div>
    )
}