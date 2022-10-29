import { MjmlImage } from "mjml-react";
import BaseLayout from "./components/BaseLayout";
import Divider from "./components/Divider";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";

const FinalizingReminder6 = ({ name }) => {
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
        text="Complete Your Loan"
      />
      <Divider />
      <P>{name},</P>
      <P>
        This may be your last chance to obtain funding from Fynn! Your loan
        approval will be archived soon unless you sign your loan document. Don’t
        let this opportunity go to waste!
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder6;
