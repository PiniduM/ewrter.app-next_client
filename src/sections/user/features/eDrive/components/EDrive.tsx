import DriveSlots from "./DriveSlots";

import classes from "./EDrive.module.css";

const EDrive = () => {

    return (
        <div className={classes.e_drive}>
            <h1 className={classes.heding}>eDrive</h1>
            <DriveSlots />
        </div>
    )
}


export default EDrive;