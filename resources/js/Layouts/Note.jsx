import { Link } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Note ({note}){

    const route = useRoute();
    return (
        <div className="note-container">
            <h4 className="note-title">{note.title}</h4>
            <p className="note-body">&nbsp;&nbsp;&nbsp;{note.body}</p>
            <i className="note-date">{new Date(note.created_at).toLocaleString()}</i>

            <Link className="note-link"
                href={route('notes.show', note)}>
                    Read more...
            </Link>
        </div>
    );
}

export default Note;
