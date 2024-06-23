import Header1 from "./components/1-headers/Header1";
import Header2 from "./components/1-headers/Header2";
import Header3 from "./components/1-headers/Header3";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme"
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import ScrollBar from "./components/scrollbar/ScrollBar";
import Footer from "./components/4-footer/Footer";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
// @ts-ignore
    value={colorMode}>
      <ThemeProvider 
// @ts-ignore
      theme={theme}>
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
        <Main />
        <ScrollBar />
        <Footer />
        <CssBaseline />

      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
