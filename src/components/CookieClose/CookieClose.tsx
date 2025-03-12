import { useState } from "react";
import { saveMessage } from "../../services/local-storage.service";
import { getNewMessage } from "../../services/gemini.service";
import { HammerLoading } from "..";
import fortuneCookie from "../../images/fortune-cookie.png";
import "./CookieClose.css";

interface CookieCloseProps {
  intl: any;
  currentLocale: string;
  setMessage: (message: string) => void;
  setError: (error: boolean) => void;
}

export const CookieClose = (props: CookieCloseProps) => {
  const { intl, currentLocale, setMessage, setError } = props;

  const [loading, setLoading] = useState<boolean>(false);

  const getMessage = async () => {
    let message = null;
    setError(false);

    try {
      message = await getNewMessage(currentLocale);
    } catch (e: any) {
      message = intl.get("home.errorMessage");
      setError(true);
    }

    return message;
  };

  const openCookie = async () => {
    setLoading(true);

    const newMessage = await getMessage();

    if (newMessage) {
      saveMessage(newMessage);
      setMessage(newMessage);
    }

    setLoading(false);
  };

  return (
    <div className="container-cookie">
      {loading && <HammerLoading />}

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
  );
};
