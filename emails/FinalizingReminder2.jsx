import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";

const FinalizingReminder2 = ({ name, schoolName }) => {
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
        It's time to sign your loan documents!
      </MjmlText>
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
      <MjmlText>Hello {name},</MjmlText>
      <MjmlText>
        We hope you're excited about attending {schoolName}! You're almost ready
        to go with Fynn - we just need you to make it official.
      </MjmlText>
      <MjmlText>
        Let us know if you have any questions or concerns - our team is here to
        help. If you're no longer interested in financing your education with
        Fynn, just reply to this email and let us know.
      </MjmlText>

      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default FinalizingReminder2;
