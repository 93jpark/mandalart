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
    const [data, setData] = useState(data);

    
    const [NW, setData] = useState(data.NW);
    const [N, setData] = useState(data.N);
    const [NE, setData] = useState(data.NE);
    const [Main, setData] = useState(data.Main);
    const [E, setData] = useState(data.E);
    const [SW, setData] = useState(data.SW);
    const [S, setData] = useState(data.S);
    const [SE, setData] = useState(data.SE);
    

    

    

    
    const clickedContainer = (area) => {
        alert(`It is ${area} area`);
        setModalIsOpen(true);
        
    }

    const setContent = (major, content, newContent) => {
        alert(`major:${major}, content:${content}, newCont:${newContent}`)

        let newData = {
            ...data,
            
        };
        setData(newData);
        console.log(newData);
        console.log(data);
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
                                const major = idx === 4 ? "Main" : "sub"+position;
                                const subject = i === 4 ? "Main" : pos;

                                return (
                                    <Box key={position+idx+pos+i} setContent={setContent} major={major} subject={subject} content={[major][subject]}></Box>
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