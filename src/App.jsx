import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
