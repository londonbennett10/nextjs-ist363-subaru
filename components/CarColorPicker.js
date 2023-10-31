import {useState} from 'react';
import Swatches from './Swatches.js';


const colors = [
    "red", "orange", "yellow"
];



const CarColorPicker = () => {
    const[activeColor, setActiveColor] = useState("Red");

    return <section>
        <div style={{backgroundColor: activeColor}}>Large Car image goes here.</div> 
        <Swatches 
        data={colors} 
        changeHandler={setActiveColor}
        />
        <h3>{activeColor}</h3>
    </section>
}

export default CarColorPicker;