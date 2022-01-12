import Box from './Box'
import styles from './BoxContainer.module.css';
import { useSelector, useDispatch } from 'react-redux'

const posArr = ["NW", "N", "NE", "W", "Main", "E", "SW", "S", "SE"];


const BoxContainer = ( { boxId, clickedContainer } ) => {
    const dataset = useSelector((state) => state.mandalart);
    const content = boxId==="Main" & dataset[boxId][4]==='' ? 'click to start' : dataset[boxId][4]

    const colorScheme = {
        NW: [237, 170, 132],
        N: [239, 124, 59],
        NE: [242, 237, 208],
        W: [255, 108, 108],
        E: [216, 237, 132],
        SW: [228, 171, 255],
        S: [132, 187, 237],
        SE: [162, 255, 130],
        Main: [255, 255, 255],
    }

    const getFillingRate = (area) => {
        const _dataset = dataset[area];
        let count = 0;
        _dataset.forEach(e => e !=='' ? count = count + 1 : null)
        return count;
    }

    const stylingBGC = (boxId, level) => {
        let opacity = 0.2 + (level*0.15);
        if(level === 0) opacity = 0;
        //if(boxId === 'Main') opacity = 1;
        return ({
            backgroundColor: `rgba(${colorScheme[boxId][0]}, ${colorScheme[boxId][1]}, ${colorScheme[boxId][2]}, ${opacity})`
        })
    }

    return (
        <div onClick={()=>{clickedContainer(boxId)}} style={stylingBGC(boxId, getFillingRate(boxId))} className={styles.container}>
            {content}
        </div>        
    )
}

export default BoxContainer;