import { Link } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Note ({note}){

    const route = useRoute();
    return (
        <div className="note-container">
            <h4 className="note-title">{note.title}</h4>
            <p className="note-body">{truncateText(note.body)}</p>
            <i className="note-date">{new Date(note.created_at).toLocaleString()}</i>

            <Link className="note-link"
                href={route('notes.show', note)}>
                    Read more
            </Link>
        </div>
    );
}

function truncateText(text, maxLength = 230) {
    if (text.length <= maxLength) {
        return text; // no need to truncate
    }
    return text.slice(0, maxLength) + '...';
}


export default Note;
