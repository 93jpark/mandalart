import styles from './Modal.module.css';
import { FaRegWindowClose } from 'react-icons/fa';
import { useState } from 'react';

const Modal = ({switchModalStatus, focusPos, children}) => {
    

    const closeWindow = () => {
        //alert('clicked to close');
        switchModalStatus();
    }

    console.log(focusPos);

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.statusBar}>
                        <span className={styles.statusTitle}>{focusPos}</span>
                        <FaRegWindowClose className={styles.closeBtn} onClick={closeWindow}/>
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}


export default Modal;