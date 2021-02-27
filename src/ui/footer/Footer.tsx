import React from "react";

// style
import styled from "styled-components";

const AppFooter = styled.footer`
    flex: 0 0 20px;
    background-color: black;
`;

interface IProps {}
interface IState {}

export default class Footer extends React.PureComponent<IProps, IState> {
    public render() {
        return <AppFooter>{"Footer"}</AppFooter>;
    }
}
