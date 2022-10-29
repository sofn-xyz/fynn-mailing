import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";

const TuitionRequestReminder7 = ({ name }) => {
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
      <MjmlText
        fontSize={fontSize.xl}
        fontFamily={fontFamily.serif}
        lineHeight={lineHeight.tight}
        cssClass="header-xl"
      >
        Your chance for funding will be archived soon
      </MjmlText>
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
      <P>{name},</P>
      <P>
        There’s not much time left to request your tuition amount for your Fynn
        loan! We need to know how much money you will need so that we can verify
        that with your school. If you don’t make a tuition request, your
        application may be archived soon, causing you to lose your accepted
        status.
      </P>

      <P>
        Best,
        <br />
        The Fynn team
      </P>
    </BaseLayout>
  );
};

export default TuitionRequestReminder7;
