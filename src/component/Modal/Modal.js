import styles from './Modal.module.css';
import { IoCloseOutline } from 'react-icons/io5';
import { useState } from 'react';
import Box from '../Main/Box';
import InputModal from './InputModal';

import { setNewGoal, selectMajorPos, selectMinorPos } from '../../mandalart/mandalartSlice'

import { useSelector, useDispatch } from 'react-redux'


const Modal = ({switchModalStatus, children}) => {
    const [isInputModalOpen, setIsInputModalOpen] = useState(false);
    const [clickedPos, setClickedPos] = useState('');

    const posArr = useSelector((state) => state.mandalart.posArr);
    const dataset = useSelector((state) => state.mandalart);
    const dispatch = useDispatch();

    const selectedMajorPos = dataset.SelectedMajorPos;
    const main = dataset[selectedMajorPos][4];

    
    console.log('fuck you ');
    console.log(dataset)

    const closeWindow = () => {
        switchModalStatus();
    }

    const getClickedPos = (pos) => {
        setClickedPos(pos);
        console.log(`pos : ${pos}`);
        dispatch(selectMinorPos({
            newSelectedMinorPos: pos
        }));

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
                            {main === '' ? 'empty' : dataset[dataset.SelectedMajorPos][4]}
                        </span>
                        <IoCloseOutline className={styles.closeBtn} onClick={closeWindow}/>
                    </div>

                    { isInputModalOpen ? <InputModal switchInputModalStatus={switchInputModalStatus} pos={clickedPos} ></InputModal> : null }

                    <div className={styles.content}>
                        <div className={styles.mandalart}>
                            {posArr.map((pos, i) => {
                                console.log(dataset[selectedMajorPos][i])
                                const flag = dataset[selectedMajorPos][i] === '' ? true : false;

                                let content = flag ? '' : dataset[selectedMajorPos][i];
                                
                                if(i === 4 && flag) {
                                    content=`click to set goal💪`
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