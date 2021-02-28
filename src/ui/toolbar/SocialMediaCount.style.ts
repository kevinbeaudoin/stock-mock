// models
import { Sentiment } from "api/socialMedia/models";

// style
import styled, { css } from "styled-components";

export const SocialMediaContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.spacingMd};
        align-items: center;
    `,
);

export const SocialMediaCountBadge = styled.span<{ sentiment: Sentiment }>(
    ({ theme, sentiment }) => css`
        border-radius: ${theme.radiusMd};
        color: white;
        font-weight: ${theme.fontWeightBold};
        margin: 0 ${theme.spacingMd};
        padding: ${theme.spacingXs} ${theme.spacingSm};

        ${sentiment === "positive" &&
        css`
            background-color: ${theme.colorPositive};
        `}

        ${sentiment === "neutral" &&
        css`
            background-color: ${theme.colorNeutral};
        `}

        ${sentiment === "negative" &&
        css`
            background-color: ${theme.colorNegative};
        `}
    `,
);
