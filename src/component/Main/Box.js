import styles from './Box.module.css'


const Box = ( { subject, content, setContent, switchInputModalStatus } ) => {



    const getContent = () => {
        if(content === 'Main') {
            
        } else {
            //onClickPop(index)
        }
        
    }

    const setNewContent = () => {
        //alert("clicked")
        switchInputModalStatus();
    }
    
    return (
        <div onClick={setNewContent} className={styles.Box}>
            <span className={styles.Content}>{content}</span>
        </div>
    )
}

export default Box;