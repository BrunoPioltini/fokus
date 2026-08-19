import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Começar</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    color: "#021123",
    fontSize: 18,
    textAlign: "center",
  },
});
