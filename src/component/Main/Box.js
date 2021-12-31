import styles from './Box.module.css'


const Box = ( { major, subject, content, setContent } ) => {



    const getContent = () => {
        if(content === 'Main') {
            
        } else {
            //onClickPop(index)
        }
        
    }

    const setNewContent = () => {
        alert("set new content")
        console.log(`box pos is ${subject}`)
        setContent(major, subject, "new")
    }
    
    return (
        <div onClick={setNewContent} className={styles.Box}>
            <span className={styles.Content}>{content}</span>
        </div>
    )
}

export default Box;