import { MjmlText, MjmlImage } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight } from "./theme";
import assetUrl from "./util/assetUrl";
import P from "./components/P";

const ApplicationApproved = ({ name, schoolName }) => {
  return (
    <BaseLayout>
      <MjmlImage
        src={assetUrl("/assets/balloons.png")}
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
        cssClass="header-md"
      >
        You’re approved for a loan up to $15,000!
      </MjmlText>
      <P>Hi {name},</P>
      <P>
        Congratulations! You have been approved for a Fynn loan to attend{" "}
        {schoolName}.
      </P>
      <P>
        Now it’s time to select your loan amount and verify your identity; click
        the button below to complete your loan.
      </P>
      <Button
        href="https://apply.fynncredit.com/application"
        text="Complete Your Loan"
      />
      <P>We’re excited to be a part of your success at {schoolName}!</P>
    </BaseLayout>
  );
};

export default ApplicationApproved;
