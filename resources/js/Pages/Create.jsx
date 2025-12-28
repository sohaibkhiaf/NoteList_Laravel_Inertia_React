import Layout from "../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy";
import styles from "../../css/Create.module.css";
import { useRef } from "react";

function Create () {

    const bodyRef = useRef();
    const titleRef = useRef();

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
                        placeholder="Enter publication title" ref={titleRef}/>
                        <div className={styles.createTitleErrorsContainer}>
                            <div className={styles.createTitleError}>{errors.title ?? ""}</div>
                            {typeof titleRef.current === "undefined" ?
                            (<p className={styles.createTitleCounter}>0/120</p>) :
                            (<p className={styles.createTitleCounter}
                                style={titleRef.current.value.length > 120 ? {color: "#950606"} : {}}>
                                {titleRef.current.value.length}/120
                            </p>) }
                        </div>

                    <textarea className={styles.createFormBody} rows={10}
                        name="body" id="body" value={data.body} ref={bodyRef}
                        onChange={(e) => setData('body', e.target.value) }
                        style={errors.body && errorBorder} placeholder="Enter publication body"></textarea>
                    <div className={styles.createBodyErrorsContainer}>
                        <div className={styles.createBodyError}>{errors.body ?? ""}</div>
                        {typeof bodyRef.current === "undefined" ?
                        (<p className={styles.createBodyCounter}>0/500</p>) :
                        (<p className={styles.createBodyCounter}
                            style={bodyRef.current.value.length > 500 ? {color: "#950606"} : {}}>
                            {bodyRef.current.value.length}/500
                        </p>) }
                    </div>

                    <button className={styles.createFormButton} disabled={processing}>Publish</button>
                </form>
            </div>

            {console.log(titleRef.current)}


        </>
    );
}

Create.layout = page => <Layout header="create" children={page}/>
export default Create;
