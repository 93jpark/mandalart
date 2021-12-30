import styles from "./Navbar.module.css"
import FaGithub from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { CgWebsite } from "react-icons/cg"

const Navbar = () => {
    return (
        <>  
            
            <div className={styles.navItems}>


                <div className={styles.menuItem}>
                    <AiFillInfoCircle className={styles.menuIcon} />
                    <span>How To Use?</span>
                </div>
                
                <div className={styles.menuItem}>
                    <GoMarkGithub className={styles.menuIcon} />
                    <span>Github</span>
                </div>
                
                <div className={styles.menuItem}>
                    <CgWebsite className={styles.menuIcon} />
                    <span>Blog</span>
                </div>
                
            </div>
        </>
    )
}

export default Navbar;