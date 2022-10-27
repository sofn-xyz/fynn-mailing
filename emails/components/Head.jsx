import {
  MjmlHead,
  MjmlAttributes,
  MjmlAll,
  MjmlStyle,
  MjmlFont,
} from "mjml-react";
import {
  fontFamily,
  lineHeight,
  fontSize,
  colors,
  borderRadius,
} from "../theme";

const Head = ({ children }) => {
  return (
    <MjmlHead>
      <MjmlFont
        name="DM Serif Display"
        href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
      />
      <MjmlStyle>{`
        .smooth {
          -webkit-font-smoothing: antialiased;
        }
        .footer a {
          color: inherit !important;
          text-decoration: none !important;
        }
        .bottom-column a {
          color: inherit !important;
        }
        .social-icon {
          max-width: 60px !important;
          display: inline-block !important;
        }
        .top-section {
          border-top-left-radius: ${borderRadius.base}px;
          border-top-right-radius: ${borderRadius.base}px;
          border: 1px solid ${colors.black};
          background-color: ${colors.white};
        }
        .top-column {
          padding-top: 0px;
          border-top-left-radius: ${borderRadius.base}px;
          border-top-right-radius: ${borderRadius.base}px;
        }
        .bottom-section {
          border-bottom-left-radius: ${borderRadius.base}px;
          border-bottom-right-radius: ${borderRadius.base}px;
          border: 1px solid ${colors.black};
          background-color: ${colors.black};
        }
        .bottom-column {
          padding-bottom: 0px;
          border-bottom-left-radius: ${borderRadius.base}px;
          border-bottom-right-radius: ${borderRadius.base}px;
        }

        @media (max-width:480px) {
          .footer td {
            padding: 10px 0px !important;
          }

          .main td {
            padding: 10px 10px !important;
          }
        }
      `}</MjmlStyle>
      <MjmlAttributes>
        <MjmlAll
          fontFamily={fontFamily.sans}
          fontWeight="400"
          lineHeight={lineHeight.base}
          fontSize={fontSize.base}
          color={colors.black}
        />
      </MjmlAttributes>
      {children}
    </MjmlHead>
  );
};

export default Head;
