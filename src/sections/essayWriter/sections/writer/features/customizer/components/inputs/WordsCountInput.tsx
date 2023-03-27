import classes from "./WordsCountInput.module.css";

const WordCountInput = () => {
  return (
    <div className={classes.word_count_input}>
      <label htmlFor="wordCount" className={classes.count_label}>
        ⊡ number of words :{" "}
      </label>
        <select
          id="wordCount"
          name="wordsCount"
          defaultValue={"100"}
          className={classes.count_select}
        >
          <option value="70">70</option>
          <option value="100">100</option>
          <option value="150">150</option>
          <option value="200">200</option>
          <option value="250">250</option>
        </select>
    </div>
  );
};

export default WordCountInput;
