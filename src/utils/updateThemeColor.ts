import { hexToRGB } from "@/utils/hexTorgb";

export function updateThemeColor(
  primaryLighter: string,
  primaryLight: string,
  primaryDefault: string,
  primaryDark: string,
  primaryForeground: string
) {
  document.documentElement.style.setProperty(
    "--primary-dark",
    hexToRGB(primaryDark)
  );
}
