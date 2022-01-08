import styles from './Box.module.css'


const Box = ( { getClickedPos, content, posIdx, switchInputModalStatus } ) => {

    const getContent = () => {
        if(content === 'Main') {
            
        } else {
            //onClickPop(index)
        }
        
    }

    
    return (
        <div onClick={()=>{
                switchInputModalStatus()
                getClickedPos(posIdx)
            }} className={styles.Box}>
            <span className={styles.Content}>{content}</span>
        </div>
    )
}

export default Box;