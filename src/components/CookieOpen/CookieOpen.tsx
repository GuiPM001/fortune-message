import fortuneCookieOpen from "../../images/fortune-cookie-open.png";
import "./CookieOpen.css";

interface CookieOpenProps {
  message: string;
  intl: any;
}

export const CookieOpen = (props: CookieOpenProps) => {
  const { message, intl } = props;

  return (
    <div className="container-cookie">
      <div className="message-paper">
        <span className="message">{message}</span>
      </div>

      <img
        alt="Fortune cookie open"
        id="fortune-cookie-open"
        src={fortuneCookieOpen}
      />

      <span className="message-outside">{message}</span>

      <p className="return-text">{intl.get("home.returnText")}</p>
    </div>
  );
};
