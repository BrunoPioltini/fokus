import { Pressable, StyleSheet, Text } from "react-native";

interface ActionButtonProps {
  onPress: () => void;
  active?: boolean;
  text: string;
}

export const ActionButton = ({ onPress, active, text }: ActionButtonProps) => {
  return (
    <Pressable
      style={active ? styles.contextButtonActive : null}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contextButtonText: {
    color: "#fff",
    fontSize: 12.5,
    padding: 8,
  },
  contextButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
});
