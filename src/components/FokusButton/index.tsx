import { Pressable, StyleSheet, Text } from "react-native";

interface FokusButtonProps {
  onPress: () => void;
  title: string;
}

export const FokusButton = ({ onPress, title }: FokusButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
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
