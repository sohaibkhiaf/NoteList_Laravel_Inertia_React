import { Link } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Header ({selected}) {

    const route = useRoute();
    return (
        <>
            <header className="header-container">
                <nav className="header-nav-container">

                    <Link className={ selected === "home" ? "nav-home active" : "nav-home" }
                        href={route('notes')}>
                        Home🏠
                    </Link>
                    <Link className={selected === "create" ? "nav-create active" : "nav-create"}
                        href={route('notes.create')}>
                        Create🗒️
                    </Link>
                </nav>
            </header>
        </>
    );
}


export default Header;

