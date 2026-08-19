import { Pomodoro } from "./props";

export const C = {
  pomodoro: [
    {
      id: "focus",
      initialValue: 25 * 60,
      image: require("../../assets/images/pomodoro.png"),
      text: "Foco",
    },
    {
      id: "short",
      initialValue: 5 * 60,
      image: require("../../assets/images/short.png"),
      text: "Pausa curta",
    },
    {
      id: "long",
      initialValue: 15 * 60,
      image: require("../../assets/images/long.png"),
      text: "Pausa longa",
    },
  ] as Pomodoro[],
  timer: {
    startLabel: "Começar",
    pauseLabel: "Pausar",
    intervalMs: 1000,
  },
  footer: {
    disclaimer: "Projeto fictício e sem fins comerciais.",
    credits: "Desenvolvido por Alura.",
  },
};
