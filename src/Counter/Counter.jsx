/* eslint-disable no-unused-vars */

import React, {useState} from 'react';
import styles from './Counter.module.css';

function Counter(){
    
    const[number, setNumber] = useState(0);//stateful var and a setter function to  update that variable

    const incrementNumber = () => {
        //updater function allow a safe update based on previous state
        //good practice to use them even when updating for one time
        //use the first letter of the stateful variable or add prev to it
        setNumber(prevNumber => prevNumber + 1);
        //or n => n + 1

    }
    const resetNumber = () => {
        setNumber(0);
    }
    const decreaseNumber = () => {
        setNumber(n => n - 1);
    }


    return(
        <>
            <p className={styles.number}>{number}</p>
            <div className={styles.button_div}>
                <button onClick={incrementNumber} className= {styles.increment_button} >Increment</button>
                <button onClick={resetNumber} className={styles.reset_button}>Reset</button>
                <button onClick={decreaseNumber} className= {styles.decrease_button} >Decrement</button>
            </div>
        </>
    );
}

export default Counter