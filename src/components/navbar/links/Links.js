"use client"

import styles from "./links.module.css"
import NavLink from "./navLink/NavLink"
import { useState } from "react";

const links = [
    {
        title: "Home",
        path : "/",
    },
    {
        title : "About",
        path : "/about",
    },
    {
        title : "Contact",
        path : "/contact",
    },
    {
        title : "Blog",
        path : "/blog",
    },
];
const Links = () => {

    const [open, setOpen] = useState(false)
    const session = true
    const isAdmin = true

    return (
        <div classname={styles.container}>
            <div className={styles.links}>
                {links.map((link => (
                    <NavLink item={link} key={link.title} />
                )))}{
                    session ? (
                        <>
                        {isAdmin && (
                            <NavLink item={{title: "Admin", path: "/admin"}} /> 
                        )}
                        <button className={styles.logout}>Logout</button>
                        </>
                    ) : (
                        <NavLink item={{title: "Login", path: "/login"}} />
                    )
                }
            </div>
            <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>Menu </button>
            {
                open && (
                    <div className={styles.mobileLinks}>
                        {
                            links.map((link) => (
                                <NavLink item={link} key={link.title} />
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Links;