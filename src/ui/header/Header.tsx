import React from "react";

interface IProps {}
interface IState {}

export default class Header extends React.PureComponent<IProps, IState> {
    public render() {
        return <header>{"Stock Mock"}</header>;
    }
}
