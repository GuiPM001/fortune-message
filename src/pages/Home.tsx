import { useEffect, useState } from "react";
import { getSavedMessage } from "../services/local-storage.service";
import { languages } from "../enums/languages";
import { CookieClose, CookieOpen } from "../components";
import intl from "react-intl-universal";
import "./Home.css";

function Home() {
  const locales = {
    "pt-BR": require("../locales/pt-BR.json"),
    "en-US": require("../locales/en-US.json"),
  };

  const currentLocale =
    navigator.language in locales ? navigator.language : languages.en;

  intl.init({
    currentLocale,
    locales,
  });

  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const savedMessage = getSavedMessage();

    if (savedMessage) setMessage(savedMessage);
  }, []);

  const clearMessage = () => {
    setMessage("");
    setError(false);
  }

  return (
    <div className="container">
      {!message ? (
        <CookieClose
          setMessage={setMessage}
          setError={setError}
          intl={intl}
          currentLocale={currentLocale}
        />
      ) : (
        <CookieOpen message={message} error={error} clearMessage={clearMessage} intl={intl} />
      )}
    </div>
  );
}

export default Home;
