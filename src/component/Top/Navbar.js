import styles from "./Navbar.module.css"
import { AiFillInfoCircle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { CgWebsite } from "react-icons/cg"

const Navbar = () => {
    return (
        <>  
            <div className={styles.navItems}>
                <div className={styles.menuItem}>
                    <AiFillInfoCircle className={styles.menuIcon} />
                    <a href="#" onClick={(e)=>{e.preventDefault();}}>How To Use?</a>
                </div>
                
                <div className={styles.menuItem}>
                    <GoMarkGithub className={styles.menuIcon} />
                    <a href="https://github.com/93jpark/mandalart">Github</a>
                </div>
                
                <div className={styles.menuItem}>
                    <CgWebsite className={styles.menuIcon} />
                    <a href="https://93jpark.tistory.com">Blog</a>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;