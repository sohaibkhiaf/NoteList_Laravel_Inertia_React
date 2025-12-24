import { Link } from "@inertiajs/react";

function Navigation ({links, current}) {

    return (
        <div className="navigation-container">
            {
                links.map((link, index) =>
                    link.url ?
                    (<Link
                        className={ current === index ? "navigation-link active" : "navigation-link"}
                        key={link.label}
                        href={link.url }
                        dangerouslySetInnerHTML={{__html: index === 0 ? "<" : ( index === links.length-1 ? ">" :link.label ) }}
                    />)
                    :
                    ( <span
                        className="navigation-disabled"
                        key={link.label}
                        dangerouslySetInnerHTML={{__html: index === 0 ? "<" : ">"}}>
                    </span> )
                )
            }
        </div>
    );

}

export default Navigation;
