import styles from './InputModal.module.css';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState, useRef } from 'react';


const InputModal = ({ switchInputModalStatus }) => {

    const [userInput, setUserInput] = useState('');

    const coreSubj = "core subject";
    const minorSubj = "minor subject";

    const closeWindow = () => {
        switchInputModalStatus();
    }

    const applyNewGoal = () => {
        if(userInput === '') {
            alert('please fill out 🙂')
        } else {
            alert(userInput);
            closeWindow();
        }
        
    }
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container} >
                    <div className={styles.statusBar}>
                        <IoCloseCircleSharp className={styles.closeBtn} onClick={closeWindow} />
                    </div>
                    <p className={styles.title}>{coreSubj}</p>
                    <p className={styles.subtitle}>{minorSubj}</p>
                    <div className={styles.inputArea}>
                        <p>
                            <input type="text" 
                                autoFocus
                                autoComplete='off'
                                value={userInput} 
                                onChange={(e)=>{setUserInput(e.target.value)}}
                                onKeyDown={(e)=>{ 
                                        if(e.keyCode == 13) { applyNewGoal(); }
                                        if(e.keyCode == 27) { closeWindow(); }
                                    }
                                }
                                placeholder='new goal goes here..' />
                        </p>
                        <button id='applyBtn' onClick={applyNewGoal}>apply</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default InputModal;