import Layout from "../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";
import styles from "../../css/Edit.module.css";
import { useRef } from "react";

function Edit ({publication}) {

    const bodyRef = useRef();
    const titleRef = useRef();

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
                <h2 className={styles.editHeader}>Edit Publication</h2>

                <form onSubmit={submit}>
                    <input className={styles.editFormTitle} type="text" name="title" value={data.title}
                        onChange={(e) => setData('title', e.target.value)} style={errors.title && errorBorder}
                        placeholder="Enter publication title" ref={titleRef} />
                        <div className={styles.editTitleErrorsContainer}>
                            <div className={styles.editTitleError}>{errors.title ?? ""}</div>
                            {typeof titleRef.current === "undefined" ?
                            (<p className={styles.editTitleCounter}>{data.title.length}/120</p>) :
                            (<p className={styles.editTitleCounter}
                                style={titleRef.current.value.length > 120 ? {color: "#950606"} : {}}>
                                {titleRef.current.value.length}/120
                            </p>) }
                        </div>

                    <textarea className={styles.editFormBody} rows={10}
                        name="body" id="body" value={data.body} ref={bodyRef}
                        onChange={(e) => setData('body', e.target.value)}
                        style={errors.body && errorBorder} placeholder="Enter publication body"></textarea>
                    <div className={styles.editBodyErrorsContainer}>
                        <div className={styles.editBodyError}>{errors.body ?? ""}</div>
                        {typeof bodyRef.current === "undefined" ?
                        (<p className={styles.editBodyCounter}>{data.body.length}/500</p>) :
                        (<p className={styles.editBodyCounter}
                            style={bodyRef.current.value.length > 500 ? {color: "#950606"} : {}}>
                            {bodyRef.current.value.length}/500
                        </p>) }
                    </div>

                    <button className={styles.editFormButton} disabled={processing}>Update</button>
                </form>
            </div>
        </>
    );
}

Edit.layout = page => <Layout children={page}/>

export default Edit;
