import { useEffect, useState } from "react";
import fortuneCookie from "./images/fortune-cookie.png";
import fortuneCookieOpen from "./images/fortune-cookie-open.png";
import { getNewMessage } from "./services/open-ai.service";
import "./App.css";

function App() {
  const [hiddenOpenCookie, setHiddenOpenCookie] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const openCookie = async () => {
    setLoading(true);
    
    const message = await getNewMessage();
    
    if (message) {
      setMessage(message);
      localStorage.setItem("message", message);
      setHiddenOpenCookie(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    const messageReceived = localStorage.getItem("message");

    if (messageReceived) {
      setMessage(messageReceived);
      setHiddenOpenCookie(false);
    }
  }, []);

  return (
    <div className="container">
      {loading && <div className="container-loading">Broking the cookie...</div>}

      {hiddenOpenCookie ? (
        <div className="container-cookie">
          <h3>Click in the fortune cookie</h3>
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
