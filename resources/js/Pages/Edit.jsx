import Layout from "../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Edit ({note}) {

    const route = useRoute();
    const {data, setData, post , errors, processing} = useForm({
        title: note.title,
        body: note.body,
    });

    function submit (e) {
        e.preventDefault();
        post(route('notes.update', note));
    }

    const errorBorder = {
        borderColor: "#950606",
    }

    return (
        <>
            <Head title={`Edit Note`}/>

            <div className="edit-content-container">
                <h2 className="edit-header">Edit Note (#{note.id})</h2>

                <form onSubmit={submit}>
                    <input className="edit-form-title" type="text" name="title" value={data.title}
                        onChange={(e) => setData('title', e.target.value)} style={errors.title && errorBorder}
                        placeholder="Enter note title" />
                    <div className="edit-title-error">{errors.title ?? ""}</div>

                    <textarea className="edit-form-body" rows={10}
                        name="body" id="body" value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        style={errors.body && errorBorder} placeholder="Enter note body"></textarea>
                    <div className="edit-body-error">{errors.body ?? ""}</div>

                    <button className="edit-form-button" disabled={processing}>Update</button>
                </form>
            </div>
        </>
    );
}

Edit.layout = page => <Layout children={page}/>

export default Edit;
