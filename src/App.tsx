import { languages } from "./enums/languages";
import Home from "./pages/Home";
import intl from "react-intl-universal";

function App() {
  const locales = {
    "pt-BR": require("./locales/pt-BR.json"),
    "en-US": require("./locales/en-US.json"),
    "es-419": require("./locales/es-ES.json"),
  };

  const currentLocale =
    navigator.language in locales ? navigator.language : languages.en;

  intl.init({
    currentLocale,
    locales,
  });

  return <Home currentLocale={currentLocale} />;
}

export default App;
