import styles from './InputModal.module.css';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setNewGoal } from '../../mandalart/mandalartSlice'

const InputModal = ({ switchInputModalStatus, pos, majorSub }) => {
    const dataset = useSelector((state) => state.mandalart[majorSub]);
    const dispatch = useDispatch();

    console.log(`${pos} + ${majorSub}`)
    const [userInput, setUserInput] = useState('');
    const majorSubject = dataset[4];
    const minorSubj = "minor subject";
    //let dispContent = subject === '' ? 'empty' : subject;
    

    const closeWindow = () => {
        switchInputModalStatus();
    }

    const applyNewGoal = () => {
        if(userInput === '') {
            alert('please fill out 🙂')
        } else {
            alert(userInput);
            dispatch( setNewGoal({
                majorPos: majorSub,
                minorPos: pos,
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
                    <p className={styles.title}>
                        {'major: '+majorSubject}
                    </p>
                    <p className={styles.subtitle}>
                        {'minor: '}
                    </p>
                    <div className={styles.inputArea}>
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