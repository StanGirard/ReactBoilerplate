import logo from "../logo.svg";
import React from 'react';
import '../App.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import {exampleConstants} from '../actions/example.actions'


const Example = (props) => {
    const  {text, exampleConstants} = (props);
    const handleButtonClick = () => {
        if (text === undefined) {
            exampleConstants('Hello World !');
        }
        else{
            exampleConstants(undefined);
        }
    };


    return (

        // noinspection JSAnnotator
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <Button onClick={handleButtonClick}> Click me to send event </Button>
            <p> {text} </p>
        </div>
    )
}

export default withRouter(connect(
    (state) =>  ({text: state.example.example.text}),
    {exampleConstants}
    )(Example))
