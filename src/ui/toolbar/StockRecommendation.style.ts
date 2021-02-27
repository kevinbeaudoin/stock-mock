// model
import { Recommendation } from "api/recommendation/models";

// style
import styled, { css } from "styled-components";

export const RecommendationContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.spacingMd} 0;
        align-items: center;
    `,
);

export const RecommendationBadge = styled.span<{ recommendation: Recommendation }>(
    ({ theme, recommendation }) => css`
        border-radius: ${theme.radiusMd};
        color: white;
        font-weight: ${theme.fontWeightBold};
        margin: 0;
        padding: ${theme.spacingXs} ${theme.spacingSm};

        ${recommendation === "buy" &&
        css`
            background-color: ${theme.colorPositive};
        `}

        ${recommendation === "hold" &&
        css`
            background-color: ${theme.colorNeutral};
        `}

        ${recommendation === "sell" &&
        css`
            background-color: ${theme.colorNegative};
        `}
    `,
);
