import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import {useRoute} from "../../../vendor/tightenco/ziggy";
import styles from "../../css/Show.module.css";

function Show({publication}) {

    // hook initialization
    const {auth} = usePage().props;
    const route = useRoute();
    const {post} = useForm();

    // delete publication function
    function submit(e) {
        e.preventDefault();
        if (window.confirm("Are you sure you want to delete this publication?")) {
            post(route('publications.destroy', publication));
        }
    }

    return (
        <>
            {/* title  */}
            <Head title="Show" />

            <div className={styles.showContentContainer}>

                {/* header  */}
                <h2 className={styles.showPublisherHeader}>Publisher: <span>{publication.user.name}</span></h2>

                {/* publication  */}
                <div className={styles.showPublicationContainer}>
                    <p className={styles.showTitle}>{publication.title}</p>
                    <p className={styles.showPublicationBody}>{publication.body}</p>
                    <i  className={styles.showPublicationDate}>{new Date(publication.created_at).toLocaleString()}</i>

                    {/* action buttons  */}
                    { (auth.user && auth.user.id === publication.user.id) ?
                    (<div className={styles.showButtonContainer}>
                        <form onSubmit={submit}>
                            <button className={styles.showDeleteButton}>Delete</button>
                        </form>

                        <Link className={styles.showEditLink}
                            href={route('publications.edit', publication)}>
                                Edit
                        </Link>
                    </div>)
                    : (<></>)
                    }

                </div>
            </div>
        </>
    );
}

Show.layout = page => <Layout children={page} />
export default Show;
