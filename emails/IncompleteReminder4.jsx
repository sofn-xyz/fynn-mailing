import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const IncompleteReminder4 = ({ name }) => {
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
      <Headline cssClass="header-lg">
        Find out if you are eligible for a Fynn loan!
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
      <P>{name},</P>
      <P>
        You’re close to completing your Fynn application! If you do not submit
        your application soon, it may be archived, and your progress will be
        lost.
      </P>
      <P>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”{" "}
      </P>
    </BaseLayout>
  );
};

export default IncompleteReminder4;
