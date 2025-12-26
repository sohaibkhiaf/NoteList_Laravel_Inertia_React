import { Head, Link, useForm, usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Show({note}) {

    const {auth} = usePage().props;
    const route = useRoute();
    const {post} = useForm();

    console.log(note)

    function submit(e) {
        e.preventDefault();
        post(route('notes.destroy', note));
    }

    return (
        <>
            <Head title="Show" />

            <div className="show-content-container">

                <h2 className="show-header">{note.title} (#{note.id})</h2>
                <div className="show-note-container">
                    <p className="show-note-body">&nbsp;&nbsp;&nbsp;{note.body}</p>
                    <i  className="show-note-date">{new Date(note.created_at).toLocaleString()}</i>

                    { (auth.user && auth.user.id === note.user_id) ?
                    (<div className="show-button-container">
                        <form onSubmit={submit}>
                            <button className="show-delete-button">Delete</button>
                        </form>

                        <Link className="show-edit-link"
                            href={route('notes.edit', note)}>
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
