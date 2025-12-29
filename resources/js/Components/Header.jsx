import { Link, useForm, usePage } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";
import styles from "../../css/Header.module.css"

function Header ({selected}) {

    // hook initialization
    const {auth} = usePage().props;
    const route = useRoute();
    const {post} = useForm();

    // logout function
    const logout = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to log out?")){
            post(route('logout'));
        }
    };


    return (
        <>
        <header className={styles.headerContainer}>

            {/* user name & log out  */}
            {auth.user && <div className={styles.headerUserContainer}>
                <div className={styles.userName}>{auth.user.name}</div>
                <form onSubmit={logout}>
                    <button className={styles.logoutButton}>Log out</button>
                </form>
            </div>}

            {/* navigation  */}
            <nav className={styles.headerNavContainer}>
                <Link className={ selected === "home" ? styles.navHome +" "+styles.active : styles.navHome }
                    href={route('publications')}>
                    Home🏠
                </Link>
                <Link className={selected === "create" ? styles.navCreate +" "+styles.active : styles.navCreate}
                    href={route('publications.create')}>
                    Create🗒️
                </Link>

            </nav>
        </header>
        </>
    );
}


export default Header;

