import Head from "../components/Head";
import Footer from "../components/Footer";
import {
  Mjml,
  MjmlBody,
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlText,
} from "mjml-react";
import { colors, fontSize } from "../theme";

const Base = (
  { backgroundColor, children } = { backgroundColor: colors.white }
) => (
  <Mjml>
    <Head />
    <MjmlBody width={"640px"}>
      <MjmlWrapper
        backgroundColor={backgroundColor}
        fullWidth={true}
        padding="32px 20px"
      >
        <MjmlSection paddingBottom={"0px"} cssClass="main top-section">
          <MjmlColumn
            padding={"7px 7px 32px"}
            backgroundColor={colors.white}
            cssClass="top-column"
          >
            {children}
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection paddingTop={"0px"} cssClass="bottom-section">
          <MjmlColumn
            padding={"14px"}
            paddingBottom="0px"
            backgroundColor={colors.black}
            cssClass="bottom-column"
          >
            <MjmlText
              color={colors.white}
              fontSize={fontSize.sm}
              align="center"
              paddingBottom="6px"
            >
              <b>Questions?</b> Email us at{" "}
              <a href="mailto:help@fynncredit.com">help@fynncredit.com</a> or
              call (505) 806-2054.
            </MjmlText>
          </MjmlColumn>
        </MjmlSection>
        <Footer />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

export default Base;
