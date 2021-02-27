import React from "react";

// Style
import styled, { css } from "styled-components";

interface IProps {}
interface IState {}

const AppHeader = styled.header(
    ({ theme }) => css`
        flex: 0 0 auto;
        background-color: black;
        color: ${theme.colorPrimary};
        font-size: ${theme.fontSizeXxl};
        font-weight: ${theme.fontWeightBold};
        padding: ${theme.spacingMd};
    `,
);

export default class Header extends React.PureComponent<IProps, IState> {
    public render() {
        return <AppHeader>{"Stock Mock"}</AppHeader>;
    }
}
