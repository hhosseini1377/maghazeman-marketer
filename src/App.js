import Header from "./components/header";
import Suppliers from "./containers/suppliers";
import {
  createMuiTheme,
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import { faIR } from "@material-ui/core/locale";
import { create } from "jss";
import rtl from "jss-rtl";

const Theme = createMuiTheme(
  {
    palette: {
      primary: blue,
      secondary: {
        main: "#00e676",
        contrastText: "#fff",
      },
      error: {
        main: "#ff4081",
      },
    },
    direction: "rtl",
    typography: {
      fontFamily: ["IRANSans", "Tahoma", "Arial"].join(","),
    },
  },
  faIR
);
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StylesProvider jss={jss}>
        <section>
          <Header />
          <Suppliers />
        </section>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
