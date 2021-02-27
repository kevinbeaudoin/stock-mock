import React from "react";

// components
import StockFinder from "ui/toolbar/StockFinder";

interface IProps {}
interface IState {}

export default class StockToolbar extends React.PureComponent<IProps, IState> {
    public render() {
        return (
            <div>
                <StockFinder />
            </div>
        );
    }
}
