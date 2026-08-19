import { ActionButton } from "@/components/ActionButton";
import { FokusButton } from "@/components/FokusButton";
import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const pomodoro = [
  {
    id: "focus",
    initialValue: 25,
    image: require("./pomodoro.png"),
    text: "Foco",
  },
  {
    id: "short",
    initialValue: 5,
    image: require("./short.png"),
    text: "Pausa curta",
  },
  {
    id: "long",
    initialValue: 15,
    image: require("./long.png"),
    text: "Pausa longa",
  },
];

export default function Index() {
  const [timerType, setTimerType] = useState(pomodoro[0]);

  return (
    <View style={styles.container}>
      <Image source={timerType.image} style={styles.image} />
      <View style={styles.actions}>
        <View style={styles.context}>
          {pomodoro.map((pom) => (
            <ActionButton
              key={pom.id}
              onPress={() => setTimerType(pom)}
              active={timerType.id === pom.id}
              text={pom.text}
            />
          ))}
        </View>
        <Text style={styles.timer}>
          {new Date(timerType.initialValue * 1000).toLocaleTimeString("pt-BR", {
            minute: "2-digit",
            second: "2-digit",
          })}
        </Text>
        <FokusButton onPress={() => console.log("Começar")} />
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
  timer: {
    fontSize: 54,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
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
