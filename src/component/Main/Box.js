import styles from './Box.module.css'


const Box = ( { main, content } ) => {



    const getContent = () => {
        if(content === 'Main') {

        } else {
            //onClickPop(index)
        }
        
    }
    
    return (
        <div onClick={getContent} className={styles.Box}>
            <span className={styles.Content}>{content}</span>
        </div>
    )
}

export default Box;