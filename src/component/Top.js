import styles from '../css/Top.module.css'

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