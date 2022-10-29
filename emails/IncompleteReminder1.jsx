import { MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const IncompleteReminder1 = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <MjmlImage
        src={assetUrl("/assets/reminder.png")}
        alt="Reminder"
        height="32px"
        width="112px"
        paddingTop="42px"
        align="left"
      />
      <Headline cssClass="header-sm">
        Funding is just a few steps away!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/login"
        text="Continue Your Application"
      />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <P>Hello {name},</P>
      <P>
        You’re almost done with your loan application to attend {schoolName}.
        Continue your application below to see if you qualify for full tuition
        funding!
      </P>
      <P>If you have any questions, simply respond to this email.</P>
      <P>We look forward to reviewing your application.</P>
    </BaseLayout>
  );
};

export default IncompleteReminder1;
