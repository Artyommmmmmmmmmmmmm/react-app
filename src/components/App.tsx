import React from "react";
import "../styles/App.css";
import Header from "./Header";
import Child from "./Child";

function App(props) {


    let a = "TEXT"
    return (
        <>
            <Header obj={a} />
            <Child>some text</Child>
        </>
    );
    
}

export default App;