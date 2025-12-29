import { Head } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import Publication from "../Components/Publication";
import Navigation from "../Components/Navigation";
import styles from "../../css/Home.module.css";


function Home({publications}) {

    return (
        <>
            {/* title */}
            <Head title="Home" />

            {/* content  */}
            <div className={styles.homeContentContainer}>
                <h2 className={styles.homeHeader}>Publication List</h2>

                <div className={styles.homeListContainer}>
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

