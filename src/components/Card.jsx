import { useState } from 'react';
import './Card.css'
import { cardData } from '../cardData/cardData.js'

export default function Card({ selectedPlanHandler }) {
    const [isActive, setIsActive] = useState(false);


    const clickHandler = (index, item) => {
        selectedPlanHandler(item); 
        setIsActive(index);
    }

    return (
        <>
            {cardData.map((item, index) => (
                <div className={`card ${isActive === index ? 'active' : ''}`} key={index} onClick={() => clickHandler(index, item)}>
                    <p>
                        {item.type} {item.amount} miles
                    <br/>
                        <strong>${item.cost}</strong>
                    </p>
                </div>
            ))}
        </>
    )
}