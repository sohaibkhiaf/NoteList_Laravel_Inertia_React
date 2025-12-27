import { Link, useForm, usePage } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy/src/js";

function Publication ({publication}){

    const {auth} = usePage().props;
    const route = useRoute();
    const {post} = useForm();

    function submit(e) {
        e.preventDefault();

        if (window.confirm("Are you sure you want to delete this publication?")) {
            post(route('publications.destroy', publication));
        }

    }

    return (
        <div className="publication-container">
            <p>{publication.user.name}</p>
            <h4 className="publication-title">{publication.title}</h4>
            <p className="publication-body">{truncateText(publication.body)}</p>
            <i className="publication-date">{new Date(publication.created_at).toLocaleString()}</i>

            <div className="publication-button-container">

                { (auth.user && auth.user.id === publication.user_id) ?
                (<>
                <form onSubmit={submit}>
                    <button className="publication-delete-button">Delete</button>
                </form>

                <Link className="publication-edit-link"
                    href={route('publications.edit', publication)}>
                        Edit
                </Link>
                </>)
                : (<></>)
                }
                <Link className="publication-link"
                    href={route('publications.show', publication)}>
                        Read more
                </Link>

            </div>

        </div>
    );
}

function truncateText(text, maxLength = 230) {
    if (text.length <= maxLength) {
        return text; // no need to truncate
    }
    return text.slice(0, maxLength) + '...';
}


export default Publication;
