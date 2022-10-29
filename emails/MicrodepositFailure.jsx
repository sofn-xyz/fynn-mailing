import { MjmlText, MjmlImage, MjmlDivider, MjmlRaw } from "mjml-react";
import BaseLayout from "./layouts/Base";
import Button from "./components/Button";
import { fontSize, fontFamily, lineHeight, colors } from "./theme";
import assetUrl from "./util/assetUrl";

const MicrodepositFailure = ({ name }) => {
  return (
    <BaseLayout backgroundColor={colors.greenDark}>
      <MjmlImage
        src={assetUrl("/assets/action-required.png")}
        alt="Fynn"
        height="33px"
        width="169px"
        paddingTop="42px"
        align="left"
      />
      <MjmlText
        fontSize={fontSize.xl}
        fontFamily={fontFamily.serif}
        lineHeight={lineHeight.tight}
        cssClass="header-md"
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
      <MjmlText padding="1px 25px 0 40px">
        •&nbsp;&nbsp;The account is not a checking/savings account
      </MjmlText>
      <MjmlText padding="1px 25px 0 40px">
        •&nbsp;&nbsp;The account is too new
      </MjmlText>
      <MjmlText padding="1px 25px 0 40px">
        •&nbsp;&nbsp;The account is overdrawn or closed
      </MjmlText>
      <MjmlText padding="1px 25px 0 40px">
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
