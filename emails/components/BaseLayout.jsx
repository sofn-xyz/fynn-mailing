import {
  Mjml,
  MjmlBody,
  MjmlWrapper,
  MjmlSection,
  MjmlColumn,
  MjmlText,
  MjmlImage,
} from "mjml-react";
import Head from "../components/Head";
import Footer from "../components/Footer";
import assetUrl from "../util/assetUrl";
import { colors, fontSize } from "./theme";
import P from "../components/P";

export default function BaseLayout(
  { backgroundColor, children, centerLogo } = { backgroundColor: colors.white }
) {
  return (
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
              <MjmlImage
                href="https://fynncredit.com"
                src={assetUrl("/assets/logo-full.png")}
                alt="Fynn Logo"
                height="28px"
                width="63px"
                paddingTop="0px"
                align={centerLogo ? "center" : "left"}
              />
              {children}
              <P>
                Best,
                <br />
                The Fynn team
              </P>
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
}
