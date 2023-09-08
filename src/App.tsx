import { GlobalStyle } from "./styles/globalStyle/GlobalStyle"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/theme";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import Login from "./pages/account/components/Login";
import Signup from "./pages/account/components/Signup";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Navbar/>
      
        <GlobalStyle/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/account/" element={<Account/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
