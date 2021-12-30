import styles from './Box.module.css'


const Box = ( { key, index, onClickPop } ) => {



    const getContent = () => {
        if(index === 'Main') {

        } else {
            //onClickPop(index)
        }
        
    }
    
    return (
        <div onClick={getContent} className={styles.Box}>
            <span className={styles.Content}>{index}</span>
        </div>
    )
}

export default Box;