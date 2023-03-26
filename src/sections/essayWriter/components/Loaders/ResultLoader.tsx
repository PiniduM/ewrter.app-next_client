import classes from "./FormSubmitLoader.module.css"

interface IProps {
  message: string
}

const FormSubmitLoader = (props : IProps) => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner}>
        <div className={classes.bar1}></div>
        <div className={classes.bar2}></div>
        <div className={classes.bar3}></div>
        <div className={classes.bar4}></div>
        <div className={classes.bar5}></div>
      </div>
      <p className={classes.loadingPara}>{props.message}</p>
    </div>
  );
};


export default FormSubmitLoader;