import intl from "react-intl-universal";
import Home from "./pages/Home";
import { languages } from "./enums/languages";

function App() {
  const locales = {
    "pt-BR": require("./locales/pt-BR.json"),
    "en-US": require("./locales/en-US.json"),
  };

  const currentLocale =
    navigator.language in locales ? navigator.language : languages.en;

  intl.init({
    currentLocale,
    locales,
  });

  return <Home intl={intl} currentLocale={currentLocale}/>;
}

export default App;
