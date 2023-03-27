import Instruction from "@/common/components/other/Instruction";
import CustomizingForm from "./components/CustomizingForm";

import classes from "./Customizer.module.css";

const Customizer = () => {
  return (
    <div className={classes.customizer}>
      <Instruction
        heading="Customize your essays according to your preferences"
        explanation="Nothing to bother about editing your essay. You can write a personalized essay straight out."
      />
        <CustomizingForm />
    </div>
  );
};

export default Customizer;
