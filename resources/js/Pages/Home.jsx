import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import { useState } from "react";
import Publication from "../Components/Publication";
import Navigation from "../Components/Navigation";


function Home({publications}) {

    // console.log("publications")
    // console.log(publications)

    // hooks declaration
    const {flash } = usePage().props;

    const [warningMessage, setWarningMessage] = useState(flash.warning);
    const [normalMessage, setNormalMessage] = useState(flash.normal);

    // flash message intervals
    if (warningMessage) {
        setInterval(() => {
            setWarningMessage(null);
        }, 3000);
    }
    if (normalMessage) {
        setInterval(() => {
            setNormalMessage(null);
        }, 3000);
    }

    return (
        <>
            {/* page title */}
            <Head title="Home" />

            {/* flash messages */}
            {warningMessage && <div className="home-flash-error">{warningMessage}</div> }
            {normalMessage && <div className="home-flash-success">{normalMessage}</div> }

            {/* content  */}
            <div className="home-content-container">
                <h2 className="home-header">Publication List</h2>

                <div className="home-list-container">
                    {publications.data.map(publication => (
                        <Publication publication={publication} key={publication.id} />
                    ))}
                </div>
            </div>

            {/* navigation  */}
            <Navigation links={publications.meta.links} current={publications.meta.current_page} />

        </>
    );

}

Home.layout = page => <Layout header="home" children={page} />

export default Home;

