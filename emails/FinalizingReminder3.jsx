import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";

const FinalizingReminder3 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <MjmlImage
        href="https://fynncredit.com"
        src={assetUrl("/assets/logo-full.png")}
        alt="Fynn"
        height="28px"
        width="63.07px"
        paddingTop="0px"
        align="left"
      />
      <MjmlImage
        src={assetUrl("/assets/reminder.png")}
        alt="Fynn"
        height="32px"
        width="112px"
        paddingTop="42px"
        align="left"
      />
      <MjmlText
        fontSize={fontSize.xl}
        fontFamily={fontFamily.serif}
        lineHeight={lineHeight.tight}
        cssClass="header-xl"
      >
        Sign your loan before the opportunity is gone!
      </MjmlText>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Sign your Fynn loan"
      />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        If we don't hear from you soon, your Fynn loan offer may expire in a few
        days. There's still time to sign it and secure financing for your
        program!
      </MjmlText>

      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default FinalizingReminder3;
