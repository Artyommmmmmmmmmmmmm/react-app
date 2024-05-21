import * as React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";

function Header(props) {

    let [num, extendNum] = React.useState(0);
    function handle() {
        extendNum(num + 1)
    };
        return (
            <>
                <button onClick={handle}>
                    {num}
                </button>
                <div>weghrjrrth </div>
                <div>{ props.cock }</div>
            </>

        );
}

Header.PropTypes = {
    cock: PropTypes.string

}

export default Header;