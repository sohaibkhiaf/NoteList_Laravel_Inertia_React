import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import { Head, usePage } from "@inertiajs/react";

function Layout ({ header, children}){

    const {flash } = usePage().props;

    const [warningMessage, setWarningMessage] = useState(flash.warning);
    const [normalMessage, setNormalMessage] = useState(flash.normal);

    useEffect(() => {

        setNormalMessage(n => flash.normal);
        setWarningMessage(w => flash.warning);

        if (flash.warning) {
            setTimeout(() => {
                flash.warning = null;
                setWarningMessage(w => null);
            }, 3000);
        }
        if (flash.normal) {
            setTimeout(() => {
                flash.normal = null;
                setNormalMessage(n => null);
            }, 3000);
        }

    }, [flash.normal, flash.warning]);

    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="publication-icon.png" />
            </Head>
            <Header selected={header ?? "undefined"}/>

            <main>
                {warningMessage && <div className="flash-error">{warningMessage}</div> }
                {normalMessage && <div className="flash-success">{normalMessage}</div> }
                {children}
            </main>
        </>
    );

}

export default Layout;

