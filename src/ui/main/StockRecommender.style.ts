// style
import styled, { css } from "styled-components";

export const MainSection = styled.main(
    ({ theme }) => css`
        flex: 1 1 auto;
        margin: ${theme.spacingMd};
        overflow: auto;
    `,
);

export const StockToolbar = styled.section`
    align-items: center;
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;
`;

export const StockPricesSection = styled.section`
    flex: 1 1 auto;
`;
