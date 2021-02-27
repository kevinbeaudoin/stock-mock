// components
import Input from "ui/common/Input";

// Style
import styled, { css } from "styled-components";

export const StockFinderContainer = styled.div(
    ({ theme }) => css`
        display: flex;
    `,
);

export const StockFinderInput = styled(Input)(
    ({ theme }) =>
        css`
            flex: 1 1 auto;
            max-width: 250px;
            margin-right: ${theme.spacingSm};
        `,
);

export const StockFinderButton = styled.button(
    ({ theme }) => css`
        background-color: ${theme.colorPrimary};
        border: ${theme.lightBorderColor};
        border-radius: ${theme.radiusMd};
        color: white;
        cursor: pointer;
        flex: 0 0 32px;
        font-weight: ${theme.fontWeightStandard};
        font-size: ${theme.fontSizeLg};
        margin: ${theme.spacingXs} 0;
        min-width: 40px;
        outline-style: none;
        text-decoration: none;
        user-select: none;
        :hover {
            opacity: 0.8;
        }
    `,
);
