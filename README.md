# Fokus

Aplicativo de **Pomodoro** feito com **React Native** e **Expo**. O Fokus ajuda a organizar o tempo em ciclos de concentração e pausa, com três modos de sessão e um timer que pode ser iniciado ou pausado a qualquer momento.

Projeto fictício, sem fins comerciais, desenvolvido a partir do curso da Alura.

---

## O que o app faz

Na tela inicial você escolhe o tipo de sessão, vê o tempo restante e controla o cronômetro:

| Modo         | Duração | Uso típico                          |
| ------------ | ------- | ----------------------------------- |
| **Foco**     | 25 min  | Bloco principal de trabalho         |
| **Pausa curta** | 5 min   | Intervalo rápido entre focos     |
| **Pausa longa** | 15 min  | Descanso maior após vários ciclos |

- Trocar de modo **reinicia** o timer e para a contagem em andamento.
- O botão principal alterna entre **Começar** e **Pausar**, com ícone correspondente.
- Ao chegar a `00:00`, o timer volta à duração inicial daquele modo.

---

## Stack

- [Expo](https://expo.dev/) `~57` com [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native](https://reactnative.dev/) `0.86` e React `19`
- TypeScript (strict)
- [react-native-svg](https://github.com/software-mansion/react-native-svg) para os ícones de play/pause

---

## Como rodar

Pré-requisitos: Node.js e o [Expo Go](https://expo.dev/go) no celular (ou um emulador iOS/Android).

```bash
npm install
npm start
```

No terminal do Expo:

- `i` — iOS Simulator
- `a` — emulador Android
- `w` — navegador
- ou escaneie o QR Code com o Expo Go

Scripts extras:

```bash
npm run ios
npm run android
npm run web
```

---

## Estrutura do projeto

Constantes e tipagens ficam **no mesmo nível** do arquivo que as usa (`pasta/index.tsx`, `pasta/constants.ts`, `pasta/props.ts`). Se um módulo não tem valor fixo ou props, o arquivo correspondente **não é criado**.

`src/app/` é só de **rotas** do Expo Router: qualquer `.ts`/`.tsx` ali vira tela. Por isso a UI, o `C` e as tipagens da home ficam em `src/screens/Home/`. A rota `index.tsx` apenas reexporta essa tela.

```text
assets/
└── images/
    ├── pomodoro.png       # Ilustração do modo Foco
    ├── short.png          # Ilustração da pausa curta
    └── long.png           # Ilustração da pausa longa
src/
├── app/
│   └── index.tsx          # Rota / — monta a tela Home
├── screens/
│   └── Home/
│       ├── index.tsx      # Tela do pomodoro
│       ├── constants.ts   # C: modos, textos, intervalo do timer
│       └── props.ts       # Tipo Pomodoro
└── components/
    ├── ActionButton/      # Seletor de modo (Foco / Pausas)
    │   ├── index.tsx
    │   └── props.ts
    ├── FokusButton/       # Botão Começar / Pausar
    │   ├── index.tsx
    │   └── props.ts
    ├── Timer/             # Display mm:ss
    │   ├── index.tsx
    │   ├── constants.ts   # C: locale e formato de hora
    │   └── props.ts
    └── icons/
        └── index.tsx      # Ícones SVG de play e pause
```

O alias `@/` aponta para `src/` (veja `tsconfig.json`).

---

## Convenção de constantes

Cada `constants.ts` exporta **um único objeto** `C`:

```ts
export const C = {
  // textos, imagens, intervalos, etc.
};
```

Na tela principal, `C` reúne:

- `pomodoro` — lista dos três modos (id, duração em segundos, imagem e rótulo)
- `timer` — textos do botão e intervalo de `1s` da contagem
- `footer` — disclaimer e créditos

No `Timer`, `C` guarda o locale `pt-BR` e o formato `mm:ss`.

`ActionButton`, `FokusButton` e `icons` não têm constantes próprias: textos e ícones vêm por props ou são o próprio desenho SVG.

---

## Convenção de props

Cada `props.ts` concentra as interfaces/tipos daquela pasta. Exemplos:

- `ActionButtonProps` — `onPress`, `active`, `text`
- `FokusButtonProps` — `onPress`, `title`, `icon`
- `TimerProps` — `totalSeconds`
- `Pomodoro` — formato de cada item de modo na tela inicial

---

## Como o timer funciona

1. O estado inicial usa o primeiro item de `C.pomodoro` (Foco, 25 minutos).
2. `toggleTimer` dispara um `setInterval` a cada `C.timer.intervalMs` e decrementa `seconds`.
3. Se o intervalo já existe, o mesmo botão **pausa** (limpa o interval).
4. Trocar o modo chama `toggleTimerType`: atualiza o tipo, restaura a duração e para o interval.

---

## Licença

O template Expo original está sob a licença MIT. O Fokus em si é um projeto de estudo, fictício e sem fins comerciais.
