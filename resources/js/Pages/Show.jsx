import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Show({publication, user}) {

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
        <>
            <Head title="Show" />

            <div className="show-content-container">

                <p>Publisher: {user.name}</p>

                <h2 className="show-header">{publication.title} (#{publication.id})</h2>
                <div className="show-publication-container">
                    <p className="show-publication-body">&nbsp;&nbsp;&nbsp;{publication.body}</p>
                    <i  className="show-publication-date">{new Date(publication.created_at).toLocaleString()}</i>

                    { (auth.user && auth.user.id === publication.user_id) ?
                    (<div className="show-button-container">
                        <form onSubmit={submit}>
                            <button className="show-delete-button">Delete</button>
                        </form>

                        <Link className="show-edit-link"
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
