import { useEffect, useRef } from "react";

export const GoogleAd = () => {
  const adLoaded = useRef(false);

  useEffect(() => {
    if (adLoaded.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      adLoaded.current = true;
    } catch (e) {
      console.error("Adsense error: ", e);
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1953203334371255"
        data-ad-slot="1536433861"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAd;
