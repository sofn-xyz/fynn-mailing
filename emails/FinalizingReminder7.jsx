import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";

const FinalizingReminder7 = ({ name }) => {
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
        cssClass="header-md"
      >
        It’s time to sign your loan documents!
      </MjmlText>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Sign Your Loan"
      />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        Your school has certified your tuition amount, but you still haven’t
        signed your Fynn loan document to make it official. Your account may be
        archived soon, and with that, you could lose your funding.
      </MjmlText>

      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default FinalizingReminder7;
