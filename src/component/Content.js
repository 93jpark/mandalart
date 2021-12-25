import styles from '../css/Content.module.css'

const Content = ({children}) => {
    return (
        <><div className={styles.container}>
            {children}
        </div>
        </>
    )
}

export default Content;