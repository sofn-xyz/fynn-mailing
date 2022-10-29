import { MjmlImage } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const TuitionRequestReminder5 = ({ name }) => {
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
        Request a tuition amount for your Fynn loan
      </Headline>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <Divider />
      <P>{name},</P>
      <P>
        Please take a minute to input your tuition request amount for your Fynn
        loan. We need this information to be certified by your school before you
        can sign!
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder5;
