import * as Style from "./Button.style";

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
}

function Button({children, ...props}: ButtonInterface) {
    return (
        <Style.Button {...props}>{children}</Style.Button>
    );
}

export default Button;