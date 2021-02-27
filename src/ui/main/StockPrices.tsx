import React from "react";

// component
import { StockPricesContainer, StockDate, StockPrice, StockPriceLine } from "./StockPrices.style";

interface IProps {
    prices: number[];
}
interface IState {}

export default class StockPrices extends React.PureComponent<IProps, IState> {
    private buildStockPrice(price: number, index: number) {
        const date = new Date();
        date.setDate(date.getDate() - index);
        const formattedDate = `${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()} :`;
        return (
            <>
                <StockDate>{formattedDate}</StockDate>
                <StockPrice>{price}$</StockPrice>
            </>
        );
    }

    public render() {
        const { prices } = this.props;
        return (
            <StockPricesContainer>
                {prices.map((price, index) => (
                    <StockPriceLine key={index}>{this.buildStockPrice(price, index)}</StockPriceLine>
                ))}
            </StockPricesContainer>
        );
    }
}
