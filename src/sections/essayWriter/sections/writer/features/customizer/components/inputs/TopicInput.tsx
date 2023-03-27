import { useState } from "react";
import classes from "./TopicInput.module.css";

const TopicInput = (props) => {

  const [topic,setTopic] = useState("");

    return (
        <div className={classes.topic}>
        <h3 className={classes.prompt}>&#8865; Enter your topic</h3>
        <input
          type="text"
          name="topic"
          value={topic}
          maxLength="30"
          placeholder="Your Topic..."
          onChange={e => setTopic(e.target.value)}
          required
          className={classes.topicInput}
        />
        {topic.length > 29 && (
          <p className={classes.condition}>
            *Topic should contain less than 30 letters, increase the limit by getting <span className={classes.subscriptionReffer}>a
            premium subscription</span>.{" (premium subscription is comming soon...)"}
          </p>
        )}
      </div>
    )
}
export default TopicInput;