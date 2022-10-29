import { MjmlText } from "mjml-react";
import { fontSize, fontFamily, lineHeight } from "./theme";

const Headline = ({ cssClass, paddingBottom, align, children }) => {
  return (
    <MjmlText
      fontSize={fontSize.xl}
      fontFamily={fontFamily.serif}
      lineHeight={lineHeight.tight}
      cssClass={cssClass}
      align={align}
      paddingBottom={paddingBottom}
    >
      {children}
    </MjmlText>
  );
};

export default Headline;
