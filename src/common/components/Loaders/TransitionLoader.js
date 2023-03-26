import classes from "./TransitionLoader.module.css"

const TransitionLoader = () => {
    return (
        <div className={classes.background}>
        <h1 className={classes.loadingMsg}>Loading...</h1>
        </div>
    )
}

export default TransitionLoader;