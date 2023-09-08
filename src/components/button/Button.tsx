import * as Style from "./Button.style";

interface ButtonProps {
    children: React.ReactNode,
    
}

function Button({children}: ButtonProps) {
    return (
        <Style.Button>{children}</Style.Button>
    );
}

export default Button;