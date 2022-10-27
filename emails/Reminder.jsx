import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";

const Welcome = ({ name }) => {
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
        href="https://fynncredit.com"
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
      >
        Funding is just a<br /> few steps away!
      </MjmlText>
      <Button href="https://www.google.com" text="Continue Your Application" />
      <MjmlDivider
        borderColor={colors.yellow}
        paddingTop="48px"
        paddingBottom="36px"
        borderWidth="6px"
      />
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        You’re almost done with your loan application to attend UEI College.
        Continue your application below to see if you qualify for full tuition
        funding!
      </MjmlText>
      <MjmlText>
        If you have any questions, simply respond to this email.
      </MjmlText>
      <MjmlText>We look forward to reviewing your application.</MjmlText>
      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default Welcome;
