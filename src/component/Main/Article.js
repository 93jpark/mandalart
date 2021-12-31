import styles from './Article.module.css'
import Box from './Box'
//import ArticleTop from './ArticleTop';
import BoxContainer from './BoxContainer';
import Modal from 'react-modal';
import { useState } from 'react';
import data from '../../data/dataTemplate.json'

const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];

const Article = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [datas, setDatas] = useState(data);
    
    

    
    const clickedContainer = (area) => {
        alert(`It is ${area} area`);
        setModalIsOpen(true);
        
    }
    
    return (
        <>  
            <div className={styles.mandalart}>
                <Modal isOpen={false}>
                    This is Modal Content.
                </Modal>

                {/* core area */}
                {posArr.map((position, idx) => {
                    return (
                        <BoxContainer key={"area"+position+idx} className={styles.BoxContainer} clicked={clickedContainer}  boxId={position}>
                            
                            {/* below is for subArea */}
                            {posArr.map((pos,i) => {
                                const main = idx === 4 ? "Main" : "sub"+position;
                                const content = i === 4 ? "Main" : pos;

                                return (
                                    <Box key={position+idx+pos+i} main={main} content={datas[main][content]}></Box>
                                )
                            })}
                        </BoxContainer>

                    )
                })}

            </div>
        </>
    )
}

export default Article;