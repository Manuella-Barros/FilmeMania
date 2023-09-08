import { defaultTheme } from "./themes/theme";

type currentType = typeof defaultTheme;

declare module 'styled-components'{
    interface DefaultTheme extends currentType{};
}