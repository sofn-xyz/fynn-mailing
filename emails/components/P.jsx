import { MjmlText } from "mjml-react";

export default function P({ children }) {
  return (
    <MjmlText paddingBottom="8px" paddingTop="8px">
      {children}
    </MjmlText>
  );
}
