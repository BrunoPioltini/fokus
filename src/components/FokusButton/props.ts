import type { ReactNode } from "react";

export interface FokusButtonProps {
  onPress: () => void;
  title: string;
  icon: ReactNode;
}
