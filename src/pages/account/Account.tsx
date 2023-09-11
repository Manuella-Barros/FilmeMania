import { Outlet } from "react-router-dom";
import * as Style from "./Account.styles";
import banner from "/images/accountBanner.jpg";

function Account() {
    return (
        <Style.Main>
            <picture>
                <img src={ banner } alt="Banner de filmes" />
            </picture>
            
            <Outlet/>
        </Style.Main>
    );
}

export default Account;