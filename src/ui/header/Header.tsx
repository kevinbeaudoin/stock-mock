import React from "react";

// Style
import styled, { css } from "styled-components";

interface IProps {}
interface IState {}

const StyledHeader = styled.header(
    ({ theme }) => css`
        background-color: black;
        color: ${theme.colorPrimary};
        font-size: ${theme.fontSizeXxl};
        font-weight: ${theme.fontWeightBold};
        padding: ${theme.fontSizeLg};
    `,
);

export default class Header extends React.PureComponent<IProps, IState> {
    public render() {
        return <StyledHeader>{"Stock Mock"}</StyledHeader>;
    }
}
