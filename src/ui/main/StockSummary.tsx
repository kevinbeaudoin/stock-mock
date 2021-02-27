import React from "react";

interface IProps {}
interface IState {}

export default class StockSummary extends React.PureComponent<IProps, IState> {
    public render() {
        return <main>{"Stock Summary"}</main>;
    }
}
