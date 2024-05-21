import * as React from "react";

function Child(props) {
    return (
        <>
            <h1>{ props.children }</h1>
        </>
    );
}
export default Child;