import { MjmlButton } from "mjml-react";
import { colors, fontSize, lineHeight, borderRadius } from "./theme";

export default function Button({ href, text }) {
  return (
    <MjmlButton
      lineHeight={lineHeight.base}
      fontSize={fontSize.base}
      color={colors.white}
      innerPadding="12px 24px"
      align="left"
      href={href}
      backgroundColor={colors.blue}
      borderRadius={borderRadius.full}
      paddingTop="16px"
      padding="0"
    >
      {text}
    </MjmlButton>
  );
}
