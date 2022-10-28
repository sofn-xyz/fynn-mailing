import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";

const IncompleteReminder3 = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <MjmlImage
        href="https://fynncredit.com"
        src="/assets/logo-full.png"
        alt="Fynn"
        height="28px"
        width="63.07px"
        paddingTop="0px"
        align="left"
      />
      <MjmlImage
        src="/assets/reminder.png"
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
        cssClass="header-left"
      >
        You’re almost done! Start on a path to a better future.
      </MjmlText>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Continue Your Application"
      />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <MjmlText>Hello {name},</MjmlText>
      <MjmlText>Your loan application with Fynn is almost complete.</MjmlText>
      <MjmlText>
        Continue your Fynn application to see if you qualify for 100% tuition
        funding.
      </MjmlText>
      <MjmlText>
        We're excited to review your completed application and help launch your
        career with {schoolName}.
      </MjmlText>
      <MjmlText>
        If you have any questions, simply respond to this email.
      </MjmlText>
      <MjmlText>
        If you'd like to cancel your application, go to your account by clicking
        the button above and then select “Cancel Application.”
      </MjmlText>
      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default IncompleteReminder3;
