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
                <div>more text </div>
                <div>{ props.obj }</div>
            </>

        );
}

Header.PropTypes = {
    obj: PropTypes.string

}

export default Header;