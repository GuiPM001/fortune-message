import { useEffect, useState } from "react";
import { getNewMessage } from "../services/gemini.service";
import { getSavedMessage, saveMessage } from "../services/local-storage.service";
import { HammerLoading } from "../components/hammer-loading";
import fortuneCookie from "../images/fortune-cookie.png";
import fortuneCookieOpen from "../images/fortune-cookie-open.png";
import "./Home.css";

interface HomeProps {
  intl: any;
  currentLocale: string;
}

function Home(props: HomeProps) {
  const { intl, currentLocale } = props;

  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedMessage = getSavedMessage();

    if (savedMessage) {
      setMessage(savedMessage);
    }
  }, []);

  const openCookie = async () => {
    setLoading(true);

    const newMessage = await getMessage();

    if (newMessage) {
      saveMessage(newMessage);
      setMessage(newMessage);
    }

    setLoading(false);
  };

  const getMessage = async () => {
    let message = null;

    try {
      message = await getNewMessage(currentLocale);
    } catch (e: any) {
      message = intl.get("home.errorMessage");
    }

    return message;
  };

  return (
    <div className="container">
      {loading && <HammerLoading />}

      {!message ? (
        <div className="container-cookie">
          <span>
            {loading ? intl.get("home.loadingText") : intl.get("home.title")}
          </span>

          <img
            alt="Fortune cookie"
            id="fortune-cookie"
            src={fortuneCookie}
            onClick={openCookie}
          />
        </div>
      ) : (
        <div className="container-cookie">
          <div className="message-paper">
            <span className="message">{message}</span>
          </div>

          <img
            alt="Fortune cookie open"
            id="fortune-cookir-open"
            src={fortuneCookieOpen}
          />

          <span className="message-outside">{message}</span>

          <p className="return-text">{intl.get("home.returnText")}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
