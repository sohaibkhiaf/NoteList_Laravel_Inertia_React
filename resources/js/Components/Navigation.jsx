import { Link } from "@inertiajs/react";
import styles from "../../css/Navigation.module.css";

function Navigation ({links, current}) {

    return (
        <div className={styles.navigationContainer}>
            {
                links.map((link, index) =>
                    link.url ?
                    (<Link
                        className={ current === index ?
                            styles.navigationLink+" "+styles.active
                            : styles.navigationLink}
                        key={link.label}
                        href={link.url }
                        dangerouslySetInnerHTML={{__html: index === 0 ? "<" : ( index === links.length-1 ? ">" :link.label ) }}
                    />)
                    :
                    ( <span
                        className={styles.navigationDisabled}
                        key={link.label}
                        dangerouslySetInnerHTML={{__html: index === 0 ? "<" : ">"}}>
                    </span> )
                )
            }
        </div>
    );

}

export default Navigation;
