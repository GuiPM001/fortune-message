import fortuneCookieOpen from "../../images/fortune-cookie-open.png";
import "./CookieOpen.css";

interface CookieOpenProps {
  message: string;
  error: boolean;
  clearMessage: () => void;
  intl: any;
}

export const CookieOpen = (props: CookieOpenProps) => {
  const { message, error, clearMessage, intl } = props;

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

      <div className="bottom-div">
        {error ? (
          <button className="button" onClick={clearMessage}>{intl.get("home.getNewCookie")}</button>
        ) : (
          <p>{intl.get("home.returnText")}</p>
        )}
      </div>
    </div>
  );
};
