import { theme } from "./colors";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
