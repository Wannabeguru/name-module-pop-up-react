import Card from "./Card";
import Button from "./Button";
import classes from './Error.module.css'
const ErrorModal = (props) => {
  return (
    <Card className={classes.modal}>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorModal;
