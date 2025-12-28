import { Link, useForm, usePage } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy/src/js";
import styles from "../../css/Publication.module.css";
import { useMessage } from "@/Contexts/MessageProvider";

function Publication ({publication}){

    const {showNormal} = useMessage();

    const {auth} = usePage().props;
    const route = useRoute();
    const {post} = useForm();

    function submit(e) {
        e.preventDefault();

        if (window.confirm("Are you sure you want to delete this publication?")) {
            post(route('publications.destroy', publication));
            showNormal("Publication was deleted successfully");
        }

    }

    return (
        <div className={styles.publicationContainer}>
            <p className={styles.publicationPublisher}>Publisher: <span>{publication.user.name}</span></p>
            <h4 className={styles.publicationTitle}>{publication.title}</h4>
            <p className={styles.publicationBody}>{truncateText(publication.body)}</p>
            <i className={styles.publicationDate}>{new Date(publication.created_at).toLocaleString()}</i>

            <div className={styles.publicationButtonContainer}>

                { (auth.user && auth.user.id === publication.user.id) ?
                (<>
                <form onSubmit={submit}>
                    <button className={styles.publicationDeleteButton}>Delete</button>
                </form>

                <Link className={styles.publicationEditLink}
                    href={route('publications.edit', publication)}>
                        Edit
                </Link>
                </>)
                : (<></>)
                }
                <Link className={styles.publicationLink}
                    href={route('publications.show', publication)}>
                        Read more
                </Link>

            </div>

        </div>
    );
}

/** ai generated*/
function truncateText(text, maxLength = 340) {
    if (text.length <= maxLength) {
        return text; // no need to truncate
    }
    return text.slice(0, maxLength) + '...';
}


export default Publication;
