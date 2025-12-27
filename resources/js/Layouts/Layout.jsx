import Header from "../Components/Header.jsx";
import { Head } from "@inertiajs/react";

function Layout ({ header, children}){

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="publication-icon.png" />
            </Head>
            <Header selected={header ?? "undefined"}/>

            <main>
                {children}
            </main>
        </>
    );

}

export default Layout;

