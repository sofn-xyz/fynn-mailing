import { MjmlText, MjmlImage } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight } from "./theme";

const ApplicationApproved = ({ name, schoolName }) => {
  return (
    <BaseLayout>
      <MjmlImage
        href="https://fynncredit.com"
        src="/assets/logo-full.png"
        alt="Fynn Logo"
        height="28px"
        width="63.07px"
        paddingTop="0px"
        align="left"
      />
      <MjmlImage
        src="/assets/balloons.png"
        alt="balloons"
        height="48px"
        width="48px"
        align="left"
        paddingTop="42px"
        paddingBottom="32px"
      />
      <MjmlText
        fontSize={fontSize.xl}
        fontFamily={fontFamily.serif}
        lineHeight={lineHeight.tight}
        paddingBottom="32px"
        cssClass="header-left"
      >
        You’re approved for
        <br /> a loan up to $15,000!
      </MjmlText>
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        Congratulations! You have been approved for a Fynn loan to attend{" "}
        {schoolName}.
      </MjmlText>
      <MjmlText>
        Now it’s time to select your loan amount and verify your identity; click
        the button below to complete your loan.
      </MjmlText>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <MjmlText>
        We’re excited to be a part of your success at {schoolName}!
      </MjmlText>
      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default ApplicationApproved;
