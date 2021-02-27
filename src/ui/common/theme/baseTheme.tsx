import * as React from "react";

// theme
import themeColor from "./themeColors";
import themeSpacing from "./themeSpacing";
import themeFonts from "./themeFonts";

// style
import { ThemeProvider } from "styled-components";

const baseTheme = {
    ...themeColor,
    ...themeSpacing,
    ...themeFonts,
};

export type BaseThemeType = typeof baseTheme;

interface IProps {}
interface IState {}

export default class BaseTheme extends React.Component<IProps, IState> {
    public render() {
        const theme = { ...baseTheme };
        return (
            <ThemeProvider theme={theme}>
                <>{this.props.children}</>
            </ThemeProvider>
        );
    }
}
