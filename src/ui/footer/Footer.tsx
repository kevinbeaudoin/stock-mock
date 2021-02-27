import React from "react";

interface IProps {}
interface IState {}

export default class Footer extends React.PureComponent<IProps, IState> {
    public render() {
        return <footer>{"Footer"}</footer>;
    }
}
