import styles from '../css/Content.module.css'

const Main = ({children}) => {
    return (
        <><div className={styles.container}>
            {children}
        </div>
        </>
    )
}

export default Main;