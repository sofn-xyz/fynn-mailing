import { MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";
import Headline from "./components/Headline";

const FinalizingReminder3 = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <MjmlImage
        src={assetUrl("/assets/reminder.png")}
        alt="Fynn"
        height="32px"
        width="112px"
        paddingTop="42px"
        align="left"
      />
      <Headline cssClass="header-xl">
        Sign your loan before the opportunity is gone!
      </Headline>
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
      <P>Hi {name},</P>
      <P>
        If we don't hear from you soon, your Fynn loan offer may expire in a few
        days. There's still time to sign it and secure financing for your
        program!
      </P>
    </BaseLayout>
  );
};

export default FinalizingReminder3;
