import { MjmlText, MjmlImage } from "mjml-react";
import BaseLayout from "./layouts/Base";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";

const StudentDispersed = ({ name, schoolName }) => {
  return (
    <BaseLayout backgroundColor={colors.green}>
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
        cssClass="header-xl"
      >
        We’ve officially sent your tuition to your school
      </MjmlText>
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        We’ve sent your tuition to your school today. This means two things:
      </MjmlText>
      <MjmlText padding="1px 0 0 40px">
        1.&nbsp;&nbsp;Your interest officially starts accruing today.
      </MjmlText>
      <MjmlText padding="1px 0 0 40px">
        2.&nbsp;&nbsp;Next week, you will receive a text and email about how to
        log into your borrower portal. You can manage all aspects of your loan
        in your borrower portal.
      </MjmlText>
      <MjmlText>
        As always, please feel free to reach out with any questions. We’re
        excited for your success at {schoolName}.
      </MjmlText>
      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default StudentDispersed;
