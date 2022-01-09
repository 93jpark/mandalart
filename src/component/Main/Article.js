import styles from './Article.module.css'
import BoxContainer from './BoxContainer';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import data from '../../data/dataTemplate.json'
import { useSelector, useDispatch } from 'react-redux'
import { setNewGoal, selectMajorPos, selectMinorPos } from '../../mandalart/mandalartSlice'

const Article = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dataset = useSelector((state) => state.mandalart);
    const dispatch = useDispatch();

    

    // save which area is clicked,
    // and open the Modal window
    const clickedContainer = (pos) => {
        console.log(pos)
        dispatch(selectMajorPos({
            newSelectedMajorPos: pos
        }));

        switchModalStatus();
    }

    // control Modal open/close status
    const switchModalStatus = () => {
        setIsModalOpen(!isModalOpen);
    }
    


    return (
        <>  
            { isModalOpen ? <Modal switchModalStatus={switchModalStatus} ></Modal> : null }
            
            <div className={styles.container}>
                <div className={styles.mandalart}>

                    {dataset.Main.map((content, idx) => {
                        const position = dataset.posArr[idx];
                        
                        let majorSubject = dataset["Main"][idx];

                        
                        return (
                            <BoxContainer key={"area"+position+idx}
                                className={styles.BoxContainer}
                                clickedContainer={clickedContainer}
                                boxId = {position}
                            />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Article;