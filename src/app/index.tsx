import { ActionButton } from "@/components/ActionButton";
import { FokusButton } from "@/components/FokusButton";
import { IconPause, IconPlay } from "@/components/icons";
import { Timer } from "@/components/Timer";
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Pomodoro {
  id: string;
  initialValue: number;
  image: any;
  text: string;
}

const pomodoro: Pomodoro[] = [
  {
    id: "focus",
    initialValue: 25 * 60,
    image: require("./pomodoro.png"),
    text: "Foco",
  },
  {
    id: "short",
    initialValue: 5 * 60,
    image: require("./short.png"),
    text: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15 * 60,
    image: require("./long.png"),
    text: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);

  const timerRef = useRef<number | null>(null);

  const clear = () => {
    if (timerRef.current != null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      setTimerRunning(false);
    }
  };

  const toggleTimerType = (type: Pomodoro) => {
    setTimerType(type);
    setSeconds(type.initialValue);
    clear();
  };

  const toggleTimer = () => {
    if (timerRef.current) {
      clear();
      return;
    }

    setTimerRunning(true);

    const id = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 0) {
          clear();
          return timerType.initialValue;
        }
        return prev - 1;
      });
    }, 1000);

    timerRef.current = id;
  };

  return (
    <View style={styles.container}>
      <Image source={timerType.image} style={styles.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((pom) => (
            <ActionButton
              key={pom.id}
              onPress={() => toggleTimerType(pom)}
              active={timerType.id === pom.id}
              text={pom.text}
            />
          ))}
        </View>
        <Timer totalSeconds={seconds} />
        <FokusButton
          title={timerRunning ? "Pausar" : "Começar"}
          icon={timerRunning ? <IconPause /> : <IconPlay />}
          onPress={toggleTimer}
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto fictício e sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>Desenvolvido por Alura.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#021123",
    gap: 40,
  },
  image: {
    width: "80%",
    height: "40%",
    objectFit: "contain",
  },
  actions: {
    padding: 24,
    backgroundColor: "#14448080",
    width: "80%",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#144480",
    gap: 32,
  },
  context: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footer: {
    width: "80%",
  },
  footerText: {
    fontSize: 12.5,
    textAlign: "center",
    color: "#98A0A8",
  },
});
