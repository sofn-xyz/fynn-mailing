import { MjmlText } from "mjml-react";

const P = ({ children }) => {
  return (
    <MjmlText paddingBottom="8px" paddingTop="8px">
      {children}
    </MjmlText>
  );
};

export default P;
