import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import P from "./components/P";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import Headline from "./components/Headline";

const FinalizingReminder1 = ({ name, schoolName }) => {
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
        Your loan is approved. All you need to do before you attend {schoolName}{" "}
        is to sign your loan documents. Click the button above to sign your
        documents!
      </P>
      <P>
        Let us know if you have questions - we're here to help. We're looking
        forward to supporting your time in school and your future career.
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder1;
