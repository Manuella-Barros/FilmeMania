import { GlobalStyle } from "./styles/globalStyle/GlobalStyle"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/theme";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/Home";
import Account from "./pages/account/Account";
import Login from "./pages/account/components/Login";
import Signup from "./pages/account/components/Signup";
import Profile from "./pages/profile/Profile";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Navbar/>
        
          <GlobalStyle/>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="account" element={<Account/>}>
              <Route path="login" element={<Login/>}/>
              <Route path="signup" element={<Signup/>}/>
            </Route>
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
