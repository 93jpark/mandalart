import styles from './Box.module.css'


const Box = ( { getClickedPos, content, posIdx, switchInputModalStatus } ) => {

    const fillContent = () => {
        if(content === 'empty') {
            return null
        } else {
            return null
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