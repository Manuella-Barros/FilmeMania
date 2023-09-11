import * as Style from "./Button.style";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

function Button({children}: ButtonInterface) {
    return (
        <Style.Button>{children}</Style.Button>
    );
}

export default Button;