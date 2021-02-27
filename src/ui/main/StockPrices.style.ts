// style
import styled, { css } from "styled-components";

export const StockPricesContainer = styled.ul(
    ({ theme }) => css`
        list-style: none;
        margin: ${theme.spacingMd};
        padding: 0;
    `,
);

export const StockPriceLine = styled.li``;

export const StockDate = styled.span(
    ({ theme }) => css`
        color: ${theme.lightColorText};
        margin-right: ${theme.spacingXs};
    `,
);

export const StockPrice = styled.span(
    ({ theme }) => css`
        font-weight: ${theme.fontWeightBold};
    `,
);
