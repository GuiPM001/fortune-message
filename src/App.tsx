import { useEffect, useState } from "react";
import { getNewMessage } from "./services/open-ai.service";
import { getSavedMessage, saveMessage } from "./services/local-storage.service";
import fortuneCookie from "./images/fortune-cookie.png";
import fortuneCookieOpen from "./images/fortune-cookie-open.png";
import "./App.css";
import { HammerLoading } from "./components/hammer-loading";

function App() {
  const [hiddenOpenCookie, setHiddenOpenCookie] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedMessage = getSavedMessage();

    if (savedMessage) {
      setMessage(savedMessage);
      setHiddenOpenCookie(false);
    }
  }, []);

  const openCookie = async () => {
    setLoading(true);
    
    const message = await getNewMessage();
    
    if (message) {
      setMessage(message);
      saveMessage(message);
      setHiddenOpenCookie(false);
    }

    setLoading(false);
  };

  return (
    <div className="container">
      {loading &&
        <HammerLoading />
      }

      {hiddenOpenCookie ? (
        <div className="container-cookie">
          <h3>
            {loading ? 'Broking the cookie...' : 'Click in the fortune cookie'}
          </h3>
          <img
            alt="Image of a fortune cookie"
            id="fortune-cookie"
            src={fortuneCookie}
            hidden={!hiddenOpenCookie}
            onClick={openCookie}
          />
        </div>
      ) : (
        <div className="container-cookie">
          <img
            alt="Image of a fortune cookie open"
            id="fortune-cookie-open"
            src={fortuneCookieOpen}
          />

          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;
