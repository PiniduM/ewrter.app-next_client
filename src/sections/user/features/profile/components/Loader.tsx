import classes from "./Loader.module.css"

const ProfileLoader = () => {

    return (
    <div className={classes.container}>
    <h1 className={classes.heading}>Loading profile data from eWriter...</h1>
    <p className={classes.description}>
      Get started with eWriter and it&apos;s profile feature to unlock personalized
      writing that&apos;s tailored to your preferences. Our automated writer app
      uses your profile data to generate content that&apos;s uniquely yours. With
      eWriter, you can write smarter, not harder.
    </p>
    </div>
    )
}

export default ProfileLoader