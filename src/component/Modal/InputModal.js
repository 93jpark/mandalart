import styles from './InputModal.module.css';
import { IoCloseCircleSharp } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const InputModal = ({ switchInputModalStatus }) => {
    const coreSubj = "core subject";
    const minorSubj = "minor subject";


    const closeWindow = () => {

        switchInputModalStatus();
    }

    const applyNewGoal = () => {

    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.statusBar}>
                        <IoCloseCircleSharp className={styles.closeBtn} onClick={closeWindow} />
                    </div>
                    <p>Core subject</p>
                    <p>Minor subject</p>
                    <div className={styles.inputArea}>
                        <p>
                            <input type="text" placeholder='new goal goes here..'></input>
                        </p>
                        <button onClick={applyNewGoal}>apply</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default InputModal;