import { MjmlText, MjmlImage } from "mjml-react";
import BaseLayout from "./layouts/Base";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";

const ApplicationComplete = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.green}>
      <MjmlImage
        href="https://fynncredit.com"
        src={assetUrl("/assets/logo-full.png")}
        alt="Fynn"
        height="28px"
        width="63.07px"
        padding="0px"
      />
      <MjmlImage
        src={assetUrl("/assets/jumping-man.png")}
        alt="celebratory person"
        height="160px"
        width="136.3px"
        paddingTop="42px"
        paddingBottom="14px"
      />
      <MjmlText
        fontSize={fontSize.xl}
        fontFamily={fontFamily.serif}
        lineHeight={lineHeight.tight}
        align="center"
        cssClass="header-lg"
      >
        You’re ready to attend your program!
      </MjmlText>
      <MjmlImage
        src={assetUrl("/assets/squiggle.png")}
        alt="squiggle separator"
        padding="0px"
        width="107px"
        paddingTop="32px"
        paddingBottom="32px"
      />
      <MjmlText>
        <b>Hi {name},</b>
      </MjmlText>
      <MjmlText>
        You’re all set with a Fynn loan and are ready to attend {schoolName}!
      </MjmlText>
      <MjmlText>
        We’ll reach out shortly after your first day with more information about
        your loan and how to log into your borrower portal.
      </MjmlText>
      <MjmlText>
        Your borrower portal will allow you to view your loan balance, make
        payments, and more.
      </MjmlText>
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

export default ApplicationComplete;
