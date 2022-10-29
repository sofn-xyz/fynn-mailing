import { MjmlDivider } from "mjml-react";
import { colors } from "./theme";

export default function Divider() {
  return (
    <MjmlDivider
      borderColor={colors.yellow}
      paddingTop="32px"
      paddingBottom="30px"
      borderWidth="6px"
      padding="0"
    />
  );
}
