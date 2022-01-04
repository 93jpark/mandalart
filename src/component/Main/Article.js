import styles from './Article.module.css'
//import ArticleTop from './ArticleTop';
import BoxContainer from './BoxContainer';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import data from '../../data/dataTemplate.json'

const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];

const Article = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [focusPos, setFocusPos] = useState(null);

    const [dataset, setData] = useState(data);


    const [NW, setNW] = useState(data.NW);
    const [N, setN] = useState(data.N);
    const [NE, setNE] = useState(data.NE);
    const [Main, setMain] = useState(data.Main);
    const [E, setE] = useState(data.E);
    const [SW, setSW] = useState(data.SW);
    const [S, setS] = useState(data.S);
    const [SE, setSE] = useState(data.SE);
    

    
    const clickedContainer = (area) => {
        alert(`It is ${area} area`);
        setFocusPos(area);
        console.log(focusPos);
        switchModalStatus();
    }

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