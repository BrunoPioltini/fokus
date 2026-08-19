import { StyleSheet, Text } from "react-native";

type TimerProps = {
  totalSeconds: number;
};

export const Timer = ({ totalSeconds }: TimerProps) => {
  const date = new Date(totalSeconds * 1000);
  const options: Intl.DateTimeFormatOptions = {
    minute: "2-digit",
    second: "2-digit",
  };

  return (
    <Text style={styles.timer}>
      {date.toLocaleTimeString("pt-BR", options)}
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
