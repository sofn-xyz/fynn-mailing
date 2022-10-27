import { MjmlButton } from "mjml-react";
import { colors, fontSize, lineHeight, borderRadius } from "../theme";

const Button = ({ href, text }) => {
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
    >
      {text}
    </MjmlButton>
  );
};

export default Button;
