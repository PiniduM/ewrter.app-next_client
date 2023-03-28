import classes from "./ContactUs.module.css";

const ContactUsPage = () => {
  return (
    <div className={classes.contact_us_page}>
      <h1 className={classes.heading}>Send Your FeedBack</h1>
      <h2 className={classes.heading_slogon}>
        We will be happy to hear from you!
      </h2>
      <div className={classes.body}>
        <h3 className={classes.sub_heading}>How to conatct us?</h3>
        <div className={classes.contact_option}>
          <h4 className={classes.contact_option_heading}>Email</h4>
          <div className={classes.contact_option_description}>
            <p className={classes.description_para}>
              Feel free to send us an email anytime:{" "}
              <span className={classes.highlight}>ewriterinfo@gmail.com</span>
            </p>
          </div>
        </div>
        <div className={classes.contact_option}>
          <h4 className={classes.contact_option_heading}>Whatsapp</h4>
          <div className={classes.contact_option_description}>
            <p className={classes.description_para}>
              facing any technical issues, don&apos;t hesitate to contact us through
              whatsapp immediately{" "}
              <span className={classes.highlight}>072-1968081</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
