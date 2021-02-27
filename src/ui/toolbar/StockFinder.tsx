import React from "react";

// Component
import { StockFinderContainer, StockFinderInput, StockFinderButton } from "./StockFinder.style";

interface IProps {
    onStockSymbolChanged: (stock: string) => void;
}
interface IState {
    stockSymbol: string;
}

export default class StockFinder extends React.PureComponent<IProps, IState> {
    public state: IState = {
        stockSymbol: "",
    };

    private onInputChange(stockSymbol: string) {
        this.setState({
            stockSymbol: stockSymbol.toUpperCase(),
        });
    }

    private onInputSubmit(stockSymbol: string) {
        this.setState(
            {
                stockSymbol: stockSymbol.toUpperCase(),
            },
            this.onSearchStock,
        );
    }

    private onSearchStock() {
        this.props.onStockSymbolChanged(this.state.stockSymbol);
    }

    public render() {
        const { stockSymbol } = this.state;
        return (
            <StockFinderContainer>
                <StockFinderInput
                    placeholder="Stock Symbol"
                    value={stockSymbol}
                    onChange={this.onInputChange.bind(this)}
                    onSubmit={this.onInputSubmit.bind(this)}
                />
                <StockFinderButton onClick={this.onSearchStock.bind(this)}>go</StockFinderButton>
            </StockFinderContainer>
        );
    }
}
