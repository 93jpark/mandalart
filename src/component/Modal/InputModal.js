import styles from './InputModal.module.css';
import { FaRegWindowClose } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';
const InputModal = ({ switchInputModalStatus }) => {

    const closeWindow = () => {

        switchInputModalStatus();
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.statusBar}>
                        <AiOutlineCloseCircle className={styles.closeBtn} onClick={closeWindow} />
                    </div>
                    <p>Core subject</p>
                    <p>Minor subject</p>
                    <div className={styles.inputArea}>
                        <p>
                            Hello
                        </p>
                        <p>
                            World
                        </p>
                        <button>yo</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}


export default InputModal;