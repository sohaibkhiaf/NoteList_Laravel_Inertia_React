import Layout from "../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";
import styles from "../../css/Edit.module.css";

function Edit ({publication}) {

    const route = useRoute();
    const {data, setData, post , errors, processing} = useForm({
        title: publication.title,
        body: publication.body,
    });

    function submit (e) {
        e.preventDefault();
        post(route('publications.update', publication));
    }

    const errorBorder = {
        borderColor: "#950606",
    }

    return (
        <>
            <Head title={`Edit Publication`}/>

            <div className={styles.editContentContainer}>
                <h2 className={styles.editHeader}>Edit Publication (#{publication.id})</h2>

                <form onSubmit={submit}>
                    <input className={styles.editFormTitle} type="text" name="title" value={data.title}
                        onChange={(e) => setData('title', e.target.value)} style={errors.title && errorBorder}
                        placeholder="Enter publication title" />
                    <div className={styles.editTitleError}>{errors.title ?? ""}</div>

                    <textarea className={styles.editFormBody} rows={10}
                        name="body" id="body" value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        style={errors.body && errorBorder} placeholder="Enter publication body"></textarea>
                    <div className={styles.editBodyError}>{errors.body ?? ""}</div>

                    <button className={styles.editFormButton} disabled={processing}>Update</button>
                </form>
            </div>
        </>
    );
}

Edit.layout = page => <Layout children={page}/>

export default Edit;
