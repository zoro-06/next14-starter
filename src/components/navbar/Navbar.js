
import Links from "@/components/navbar/links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div >
                <Links />
            </div>
        </div>
    )
}

export default Navbar;