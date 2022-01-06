import styles from './Article.module.css'
import BoxContainer from './BoxContainer';
import { useState } from 'react';
import Modal from '../Modal/Modal';
//import Modal from '../../container/ModalContainer'
import data from '../../data/dataTemplate.json'

const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];

const Article = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [focusPos, setFocusPos] = useState(null);

    const [dataset, setData] = useState(data);

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

                    {/* core area */}
                    {posArr.map((position, idx) => {
                        let majorPos = idx === 4 ? "Main" : "sub" + position;
                        return (
                            <BoxContainer key={"area"+position+idx} className={styles.BoxContainer} clickedContainer={clickedContainer}  boxId={position} dataset={dataset[majorPos]} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Article;