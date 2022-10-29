import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const IncompleteReminder6 = ({ name }) => {
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
        Don’t miss out on funding. Complete your application today!
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
      <P>Hi {name},</P>
      <P>
        Be sure to finish filling out your Fynn application If you still need a
        loan for school! If you do not submit your application soon, it may be
        archived and your progress may be lost.
      </P>
      <P>You can quickly finish up and submit your application here:</P>
      <P>
        Don’t worry – even if your application becomes archived, you can always
        apply for a Fynn loan later.
      </P>
      <P>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”
      </P>
    </BaseLayout>
  );
};

export default IncompleteReminder6;
