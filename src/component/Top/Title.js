import styles from "./Title.module.css"

const Title = () => {
    return (
        <> 
            <div className={styles.container}>
                {/* <img src="../../img/logo192.png" alt="logo" className={styles.logo}></img> */}
                <img src="img/logo192.png" alt="logo" className={styles.logo}></img>
                <h1 className={styles.title}>MANDA LA ART</h1>
            </div>
        </>
    )
}

export default Title;