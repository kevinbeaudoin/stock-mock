import React from "react";

// components
import Input from "ui/common/Input";

interface IProps {}
interface IState {
    stockSymbol: string;
}

export default class StockFinder extends React.PureComponent<IProps, IState> {
    private onInputChange() {}
    private onSearchStock() {}

    public render() {
        return (
            <div>
                <Input placeholder="Stock Symbol" onChange={this.onInputChange.bind(this)} />
                <button onClick={this.onSearchStock.bind(this)}>go</button>
            </div>
        );
    }
}
