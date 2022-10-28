import { MjmlText, MjmlImage, MjmlDivider, MjmlRaw } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";

const MicrodepositFailure = ({ name }) => {
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
        Connect a new account
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
      <MjmlText>Hi {name},</MjmlText>
      <MjmlText>
        Fynn was not able to verify your identity with the bank account that you
        provided. Some reasons for this include the following:
      </MjmlText>
      <MjmlText padding="1px 0 0 40px">
        •&nbsp;&nbsp;The account is not a checking/savings account
      </MjmlText>
      <MjmlText padding="1px 0 0 40px">
        •&nbsp;&nbsp;The account is too new
      </MjmlText>
      <MjmlText padding="1px 0 0 40px">
        •&nbsp;&nbsp;The account is overdrawn or closed
      </MjmlText>
      <MjmlText padding="1px 0 0 40px">
        •&nbsp;&nbsp;You are not the owner of the account
      </MjmlText>
      <MjmlText>
        Please reattempt the bank linking with a different account.
      </MjmlText>
      <MjmlText>
        If you don’t have another account you can quickly and easily create a
        Chime account{" "}
        <a href="https://www.kqzyfj.com/click-100634244-14415782">here</a>!
      </MjmlText>

      <MjmlText>
        Best,
        <br />
        The Fynn team
      </MjmlText>
    </BaseLayout>
  );
};

export default MicrodepositFailure;
