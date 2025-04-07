import { useEffect, useState } from "react";
import {
  getSavedMessage,
  saveMessage,
} from "../services/local-storage.service";
import { Image } from "../components/Image/Image";
import { getNewMessage } from "../services/gemini.service";
import intl from "react-intl-universal";
import "./Home.css";

function Home({ currentLocale }: any) {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedMessage = getSavedMessage();

    if (savedMessage) setMessage(savedMessage);
  }, []);

  const clearMessage = () => {
    setMessage("");
    setError(false);
  };

  const getMessage = async () => {
    let message = null;
    setError(false);
    setLoading(true);

    try {
      message = await getNewMessage(currentLocale);
      saveMessage(message);
    } catch (e: any) {
      message = intl.get("home.errorMessage");
      setError(true);
    }

    setMessage(message);
    setLoading(false);
  };

  return (
    <div className="container">
      {!message && !loading && (
        <span className="title">{intl.get("home.title")}</span>
      )}

      {loading && <span className="title">{intl.get("home.loadingText")}</span>}

      {message && <span className="message">{message}</span>}

      <Image openCookie={getMessage} loading={loading} opened={!!message} />

      <div className="bottom-div">
        {error && (
          <button className="button" onClick={clearMessage}>
            {intl.get("home.getNewCookie")}
          </button>
        )}

        {message && !error && (
          <span className="return-text">{intl.get("home.returnText")}</span>
        )}
      </div>
    </div>
  );
}

export default Home;
