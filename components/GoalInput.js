import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        ></TextInput>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="CANCEL" color={"red"} onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => props.addGoalHandler(enteredGoal, setEnteredGoal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

//props.addGoalHandler.bind(this, enteredGoal)

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 30,
    padding: 10,
    width: "80%",
    marginBottom: 50,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
