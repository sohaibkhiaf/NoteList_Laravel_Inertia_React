import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import { useState } from "react";
import Note from "../Layouts/Note";
import Navigation from "../Layouts/Navigation";


function Home({notes}) {

    // hooks declaration
    const {flash } = usePage().props;

    console.log(usePage().props)

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
                <h2 className="home-header">Note List</h2>

                <div className="home-list-container">
                    {notes.data.map(note => (
                        <Note note={note} key={note.id} />
                    ))}
                </div>
            </div>

            {/* navigation  */}
            <Navigation links={notes.links} current={notes.current_page} />

        </>
    );

}

Home.layout = page => <Layout header="home" children={page} />

export default Home;

