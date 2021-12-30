import styles from './Article.module.css'
import Box from './Box'
//import ArticleTop from './ArticleTop';
import BoxContainer from './BoxContainer';

const arr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];

const Article = () => {
    
    const onClickPop = (text) => {
        alert(text);
    }

    const clickedContainer = (i) => {
        alert(i);
    }

    return (
        <>  
            <div className={styles.mandalart}>

                {arr.map((v,i) => {
                    return (
                        <BoxContainer className={styles.BoxContainer} clicked={clickedContainer} key={v+i} boxId={v}>
                            {arr.map((v,i) => {
                                return (
                                    <Box onClickPop={onClickPop} key={v+i} index={v}></Box>
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