import { MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const TuitionRequestReminder6 = ({ name }) => {
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
      <Headline cssClass="header-xl">
        Your Fynn account is about to be archived!
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <P>Hi {name},</P>
      <P>
        To complete your loan and avoid losing your approval, you must select
        your loan amount soon! Choosing a loan amount only takes 2 minutes.
        Click the button above, or log into your Fynn account to complete this
        step.
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder6;
