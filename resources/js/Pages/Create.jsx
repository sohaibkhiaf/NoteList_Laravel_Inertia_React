import Layout from "../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";
import styles from "../../css/Create.module.css";
import { useRef } from "react";

function Create () {

    const bodyRef = useRef();

    const route = useRoute();
    const {data, setData, post , errors, processing} = useForm({
        title: "",
        body: "",
    });

    function submit (e) {
        e.preventDefault();
        post(route('publications.store'));
    }

    const errorBorder = {
        borderColor: "#950606",
    }

    return (
        <>
            <Head title="Create Publication" />

            <div className={styles.createContentContainer}>
                <h2 className={styles.createHeader}>Create Publication</h2>

                <form onSubmit={submit}>
                    <input className={styles.createFormTitle} type="text" name="title" value={data.title}
                        onChange={(e) => setData('title', e.target.value)} style={errors.title && errorBorder}
                        placeholder="Enter publication title" maxLength={140}/>
                    <div className={styles.createTitleError}>{errors.title ?? ""}</div>

                    <textarea className={styles.createFormBody} rows={10}
                        name="body" id="body" value={data.body} ref={bodyRef}
                        onChange={(e) => setData('body', e.target.value) }
                        style={errors.body && errorBorder} placeholder="Enter publication body"></textarea>
                    {bodyRef.current && (<p style={bodyRef.current.value.length > 1240 ? {color: "red"} : {}}>
                        {bodyRef.current.value.length}/1240
                    </p>) }
                    <div className={styles.createBodyError}>{errors.body ?? ""}</div>

                    <button className={styles.createFormButton} disabled={processing}>Publish</button>
                </form>
            </div>


        </>
    );
}

Create.layout = page => <Layout header="create" children={page}/>
export default Create;
