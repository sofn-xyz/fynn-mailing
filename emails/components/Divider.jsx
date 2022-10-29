import { MjmlDivider } from "mjml-react";
import { colors } from "./theme";

export default function Divider() {
  return (
    <MjmlDivider
      borderColor={colors.yellow}
      paddingTop="48px"
      paddingBottom="36px"
      borderWidth="6px"
    />
  );
}
