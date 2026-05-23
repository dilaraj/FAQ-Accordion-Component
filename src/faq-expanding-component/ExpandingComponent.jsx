import './ExpandingComponent.css'
import { useState } from 'react';

import openIcon from '../assets/images/icon-plus.svg'
import closeIcon from '../assets/images/icon-minus.svg'

export default function ExpandingComponent({FAQuestion, FAQAnswer}) {
    const [isOpened, setIsOpened] = useState(false)

    const toggle = () => {
        setIsOpened(!isOpened);
    };

    return (
        <div className="expanding-component-container">
            <div className="faq-question">
                <span>{FAQuestion}</span>
                <button className="toggle-btn" onClick={toggle}>
                    {isOpened ? 
                        (<img src={closeIcon} alt="Close FAQ Question" className="closeIcon" />)
                        : 
                        (<img src={openIcon} alt="Open FAQ Question" className="openIcon" />) 
                    }
                </button>
            </div>
            
            {isOpened && (
                <div className='faq-answer'>{FAQAnswer}</div>
            )}
        </div>
    )
}