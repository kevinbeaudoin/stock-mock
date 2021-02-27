import React from "react";

// style
import styled, { css } from "styled-components";

const StockPricesContainer = styled.ul(
    ({ theme }) => css`
        list-style: none;
        margin: ${theme.spacingMd};
        padding: 0;
    `,
);
const StockPriceLine = styled.li``;

const StockDate = styled.span(
    ({ theme }) => css`
        color: ${theme.lightColorText};
        margin-right: ${theme.spacingXs};
    `,
);
const StockPrice = styled.span(
    ({ theme }) => css`
        font-weight: ${theme.fontWeightBold};
    `,
);

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
