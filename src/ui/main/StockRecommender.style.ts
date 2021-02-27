// style
import styled, { css } from "styled-components";

export const MainSection = styled.main(
    ({ theme }) => css`
        margin: ${theme.spacingMd};
    `,
);

export const StockToolbar = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const StockPricesSection = styled.section``;
