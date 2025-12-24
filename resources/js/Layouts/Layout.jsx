import Header from "./Header.jsx";

function Layout ({header, children}){

    return (
        <>
            <Header selected={header ?? "undefined"}/>

            <main>
                {children}
            </main>
        </>
    );

}

export default Layout;

