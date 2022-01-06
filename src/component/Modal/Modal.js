import styles from './Modal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import Box from '../Main/Box';
import InputModal from './InputModal';

const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];


const Modal = ({switchModalStatus, focusPos, children}) => {
    const [isInputModalOpen, setIsInputModalOpen] = useState(false)

    const closeWindow = () => {
        //alert('clicked to close');
        switchModalStatus();
    }

    const switchInputModalStatus = () => {

        setIsInputModalOpen(!isInputModalOpen);
    }

    return (
        <>
            <div className={styles.wrapper}>

                <div className={styles.container}>
                    <div className={styles.statusBar}>
                        <span className={styles.statusTitle}>{focusPos}</span>
                        <IoCloseOutline className={styles.closeBtn} onClick={closeWindow}/>
                    </div>

                    { isInputModalOpen ? <InputModal switchInputModalStatus={switchInputModalStatus} ></InputModal> : null }

                    <div className={styles.content}>
                        <div className={styles.mandalart}>
                            {posArr.map((pos, i) => {
                                return (
                                    <Box key={pos+i} switchInputModalStatus={switchInputModalStatus}   />
                                )
                            })}
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}


export default Modal;