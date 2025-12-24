import Layout from "../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";

function Create () {

    const route = useRoute();
    const {data, setData, post , errors, processing} = useForm({
        title: "",
        body: "",
    });

    function submit (e) {
        e.preventDefault();
        post(route('notes.store'));
    }

    const errorBorder = {
        borderColor: "#950606",
    }

    return (
        <>
            <Head title="Create Note" />

            <div className="create-content-container">
                <h2 className="create-header">Create Note</h2>

                <form onSubmit={submit}>
                    <input className="create-form-title" type="text" name="title" value={data.title}
                        onChange={(e) => setData('title', e.target.value)} style={errors.title && errorBorder}
                        placeholder="Enter note title"/>
                    <div className="create-title-error">{errors.title ?? ""}</div>

                    <textarea className="create-form-body" rows={10}
                        name="body" id="body" value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        style={errors.body && errorBorder} placeholder="Enter note body"></textarea>
                    <div className="create-body-error">{errors.body ?? ""}</div>

                    <button className="create-form-button" disabled={processing}>Publish</button>
                </form>
            </div>


        </>
    );
}

Create.layout = page => <Layout header="create" children={page}/>
export default Create;
