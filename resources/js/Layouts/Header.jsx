import { Link, useForm, usePage } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Header ({selected}) {

    const {auth} = usePage().props;

    const route = useRoute();
    const {post} = useForm();

    console.log(auth)

    const logout = (e) => {
        e.preventDefault();
        if (window.confirm("Are you sure you want to log out?")){
            post(route('logout'));
        }
    };


    return (
        <>
            <header className="header-container">
                <nav className="header-nav-container">

                    {auth.user &&
                    <>
                    <div>{auth.user.name}</div>
                    <form onSubmit={logout}>
                        <button>Log out</button>
                    </form>
                    </>
                    }
                    <Link className={ selected === "home" ? "nav-home active" : "nav-home" }
                        href={route('publications')}>
                        Home🏠
                    </Link>
                    <Link className={selected === "create" ? "nav-create active" : "nav-create"}
                        href={route('publications.create')}>
                        Create🗒️
                    </Link>

                </nav>
            </header>
        </>
    );
}


export default Header;

