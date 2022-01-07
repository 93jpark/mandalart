import styles from './Article.module.css'
import BoxContainer from './BoxContainer';
import { useState } from 'react';
import Modal from '../Modal/Modal';
//import Modal from '../../container/ModalContainer'
import data from '../../data/dataTemplate.json'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, setNewGoal } from '../../mandalart/mandalartSlice'

//const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];

const Article = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [focusPos, setFocusPos] = useState(null);
    const [dataset, setDataset] = useState(useSelector((state) => state.mandalart));
    
    

    const dispatch = useDispatch();
    const count = useSelector((state) => state.mandalart.value);
    
    const posArr = useSelector((state) => state.mandalart.posArr);
    console.log(posArr);


    dispatch( setNewGoal({
        majorPos: 'NW',
        minorPos: 0,
        newGoal: 'test'
    }))


    const getFillingRate = (area) => {
        const _dataset = dataset[area];
        let count = 0;
        _dataset.forEach(e => e !=='' ? count = count + 1 : null)
        return count;
    }


    // save which area is clicked,
    // and open the Modal window
    const clickedContainer = (area) => {
        setFocusPos(area);
        console.log(focusPos);
        switchModalStatus();
    }

    // control Modal open/close status
    const switchModalStatus = () => {
        setIsModalOpen(!isModalOpen);
    }
    


    return (
        <>  
            { isModalOpen ? <Modal switchModalStatus={switchModalStatus} focusPos={focusPos}></Modal> : null }
            
            <div className={styles.container}>
                <div className={styles.mandalart}>

                    {posArr.map((position, idx) => {
                        // console.log(`${position} - ${getFillingRate(position)}`);
                        let fillingRate = getFillingRate(position);
                        let majorPos = idx === 4 ? "Main" : "sub" + position;
                        return (
                            <BoxContainer key={"area"+position+idx} 
                                className={styles.BoxContainer} 
                                clickedContainer={clickedContainer}  
                                boxId={position} 
                                content={fillingRate} 
                                level={fillingRate} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Article;