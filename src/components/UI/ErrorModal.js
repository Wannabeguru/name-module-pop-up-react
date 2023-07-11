import Card from "./Card";
import Button from "./Button";
import classes from "./Error.module.css";
import React from "react";
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}/>
  );
};

const ModalOverlay = (props) => {
    <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
}

const ErrorModal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
    </React.Fragment>
  );
};

export default ErrorModal;
