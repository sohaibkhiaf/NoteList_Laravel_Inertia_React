import { useEffect } from "react";
import Header from "../Components/Header.jsx";
import { Head, router, usePage } from "@inertiajs/react";

function Layout ({ header, children}){

    // hook initialization
    const {flash } = usePage().props;

    // handle flash message change
    useEffect(() => {

        if (flash.warning) {
            setTimeout(() => {
                router.reload({
                    only: ['flash'],
                    preserveScroll: true,
                });
            }, 3000);
        }

        if (flash.normal) {
            setTimeout(() => {

                router.reload({
                    only: ['flash'],
                    preserveScroll: true,
                });
            }, 3000);
        }

    }, [flash.normal, flash.warning]);

    return (
        <>
            {/* title  */}
            <Head>
                <link rel="icon" type="image/png" href="publication-icon.png" />
            </Head>

            {/* header component  */}
            <Header selected={header ?? "undefined"}/>

            <main>
                {/* display flash messages  */}
                {flash.warning && <div className="flash-error">{flash.warning}</div> }
                {flash.normal && <div className="flash-success">{flash.normal}</div> }
                {children}
            </main>
        </>
    );

}

export default Layout;

