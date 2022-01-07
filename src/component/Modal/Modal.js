import styles from './Modal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import Box from '../Main/Box';
import InputModal from './InputModal';
import { useSelector, useDispatch } from 'react-redux'
// below func is customized func 
import { decrement, increment, incrementByAmount } from '../../mandalart/mandalartSlice'

//const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];


const Modal = ({switchModalStatus, focusPos, children}) => {
    const [isInputModalOpen, setIsInputModalOpen] = useState(false)


    // test code
    const count = useSelector((state) => state.mandalart.value);
    const dispatch = useDispatch()
    // test code end here

    const posArr = useSelector((state) => state.mandalart.posArr);
    const obj = useSelector((state) => state.mandalart);

    
    const getSubject = (subject) => {
        const sub = obj[subject];
        return sub;
    }

    const setSubject = (subject, minor, content) => {

    }

    console.log(getSubject("Main"));

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
                    {/* Test Code Below */}
                    <span>{count}</span>
                    <button aria-label="increment value" onClick={()=>{dispatch(increment())}}>Inc</button>
                    <button aria-label="increment value" onClick={()=>{dispatch(incrementByAmount(
                        {size:10}
                    ))}}>Inc2</button>
                    <button aria-label="decrement value" onClick={()=>{dispatch(decrement())}}>Dec</button>
                    {/* Test code end here */}

                    { isInputModalOpen ? <InputModal switchInputModalStatus={switchInputModalStatus} ></InputModal> : null }

                    <div className={styles.content}>
                        <div className={styles.mandalart}>
                            {posArr.map((pos, i) => {
                                return (
                                    <Box key={pos+i} switchInputModalStatus={switchInputModalStatus}  />
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