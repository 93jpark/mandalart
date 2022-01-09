import styles from './InputModal.module.css';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setNewGoal } from '../../mandalart/mandalartSlice'

const InputModal = ({ switchInputModalStatus, majorSub, pos }) => {
    const dispatch = useDispatch();
    const dataset = useSelector((state) => state.mandalart);
    const [userInput, setUserInput] = useState('');

    const major = dataset.SelectedMajorPos;
    const minor = dataset.SelectedMinorPos;

    console.log(major)
    console.log(minor)
    
    console.log(dataset);
    const closeWindow = () => {
        switchInputModalStatus();
    }

    const applyNewGoal = () => {
        if(userInput === '') {
            alert('please fill out 🙂')
        } else {
            //alert(userInput);
            dispatch( setNewGoal({
                majorPos: major,
                minorPos: minor,
                newGoal: userInput,
            }))
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
                    
                    <div className={styles.inputArea}>
                        <p className={styles.title}>
                            {`major: ${dataset[major][4]}`}
                        </p>
                        <submit>
                        
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
                            <button id='applyBtn' onClick={applyNewGoal}>apply</button>

                        </submit>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default InputModal;