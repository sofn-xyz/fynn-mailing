import { MjmlText, MjmlImage, MjmlDivider } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";

const IncompleteReminder6 = ({ name }) => {
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
        cssClass="header-lg"
      >
        Don’t miss out on funding. Complete your application today!
      </MjmlText>
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
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        Be sure to finish filling out your Fynn application If you still need a
        loan for school! If you do not submit your application soon, it may be
        archived and your progress may be lost.
      </MjmlText>
      <MjmlText>
        You can quickly finish up and submit your application here:
      </MjmlText>
      <MjmlText>
        Don’t worry – even if your application becomes archived, you can always
        apply for a Fynn loan later.
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

export default IncompleteReminder6;
