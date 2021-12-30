import styles from './Top.module.css'

const Top = ({children}) => {
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}

export default Top;