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
    <img
      alt="Fortune cookie"
      id={opened ? "fortuneCookieOpen" : "fortuneCookieClose"}
      className={`cookie ${loading ? "loading" : ""} ${opened ? "fade-in" : "fade-out"}`}
      src={opened ? fortuneCookieOpen : fortuneCookieClose}
      onClick={handleClick}
    />
  );
};
