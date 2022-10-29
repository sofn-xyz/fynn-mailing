import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const FinalizingReminder2 = ({ name, schoolName }) => {
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
      <Headline cssClass="header-md">
        It’s time to sign your loan documents!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Sign your loan"
      />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <P>Hello {name},</P>
      <P>
        We hope you're excited about attending {schoolName}! You're almost ready
        to go with Fynn - we just need you to make it official.
      </P>
      <P>
        Let us know if you have any questions or concerns - our team is here to
        help. If you're no longer interested in financing your education with
        Fynn, just reply to this email and let us know.
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder2;
