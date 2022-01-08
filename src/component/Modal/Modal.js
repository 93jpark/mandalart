import styles from './Modal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import Box from '../Main/Box';
import InputModal from './InputModal';
import { useSelector, useDispatch } from 'react-redux'
// below func is customized func 
import { decrement, increment, incrementByAmount } from '../../mandalart/mandalartSlice'


const Modal = ({switchModalStatus, majorSub, children}) => {
    const [isInputModalOpen, setIsInputModalOpen] = useState(false);
    const [clickedPos, setClickedPos] = useState('');

    const posArr = useSelector((state) => state.mandalart.posArr);
    const dataset = useSelector((state) => state.mandalart[majorSub]);
    let title = dataset[4] === '' ? 'click to fill' : dataset[4];
    console.log('fuck you '+dataset);

    const closeWindow = () => {
        switchModalStatus();
    }

    const getClickedPos = (pos) => {
        setClickedPos(pos);
    }

    const switchInputModalStatus = () => {
        setIsInputModalOpen(!isInputModalOpen);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.statusBar}>
                        <span className={styles.statusTitle}>
                            {title}
                        </span>
                        <IoCloseOutline className={styles.closeBtn} onClick={closeWindow}/>
                    </div>

                    { isInputModalOpen ? <InputModal switchInputModalStatus={switchInputModalStatus} pos={clickedPos} majorSub={majorSub} ></InputModal> : null }

                    <div className={styles.content}>
                        <div className={styles.mandalart}>
                            {posArr.map((pos, i) => {
                                let content = dataset[i] === '' ? 'empty' : dataset[i];
                                if(i === 4 && content === 'empty') {
                                    content='click to fill'
                                }

                                return (
                                    <Box key={pos+i} getClickedPos={getClickedPos} switchInputModalStatus={switchInputModalStatus} posIdx={i} content={content} />
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