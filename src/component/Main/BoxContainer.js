
import Box from './Box'
import styles from './BoxContainer.module.css';

const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];

const BoxContainer = ( { boxId, clickedContainer, dataset } ) => {
    const getBoxId = () => {
        clickedContainer(boxId);
    }

    const setContent = () => {

    }

    //console.log(dataset);
// const Box = ( { major, subject, content, setContent } ) => {


    return (
        <div onClick={getBoxId} className={styles.container}>
            {posArr.map((pos, i) => {
                return (
                    <Box key={pos+i} subject={boxId} content={dataset[pos]}   />
                )
            })}
        </div>
    )
}

export default BoxContainer;