import styles from "../css/Title.module.css"

const Title = () => {
    return (
        <> 
            <div className={styles.container}>
                <img src="../../favicon.ico" className={styles.logo}></img>
                <h1 className={styles.title}>MANDA LA ART.</h1>
            </div>
        </>
    )
}

export default Title;