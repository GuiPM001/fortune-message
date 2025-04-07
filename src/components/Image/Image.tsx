import { useEffect } from "react";
import fortuneCookieClose from "../../images/fortune-cookie-close.png";
import fortuneCookieOpen from "../../images/fortune-cookie-open.png";
import "./Image.css";

interface ImageProps {
  openCookie: () => void;
  loading: boolean;
  opened: boolean;
}

export const Image = (props: ImageProps) => {
  const { openCookie, loading, opened } = props;

  const handleClick = async () => {
    if (opened) return;

    await openCookie();
  };

  return (
    <div className="cookie-container" onClick={handleClick}>
      <img
        className={`cookie closed ${opened ? "hidden" : "visible"} ${loading ? "loading" : ""}`}
        src={fortuneCookieClose}
        alt="Closed cookie"
      />
      <img
        className={`cookie open ${opened ? "visible" : "hidden"}`}
        src={fortuneCookieOpen}
        alt="Opened cookie"
      />
    </div>
  );
};
