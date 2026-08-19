import { StyleSheet, Text } from "react-native";
import { C } from "./constants";
import { TimerProps } from "./props";

export const Timer = ({ totalSeconds }: TimerProps) => {
  const date = new Date(totalSeconds * 1000);

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString(C.locale, C.timeFormat)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
