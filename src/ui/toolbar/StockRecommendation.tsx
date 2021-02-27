import React from "react";

import { Recommendation } from "api/recommendation/models";

// style
import styled, { css } from "styled-components";

const RecommendationBadge = styled.span<{ recommendation: Recommendation }>(
    ({ theme, recommendation }) => css`
        border-radius: ${theme.radiusMd};
        color: white;
        font-weight: ${theme.fontWeightBold};
        margin: 0 ${theme.spacingMd};
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

const RecommendationContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.spacingMd};
        align-items: center;
    `,
);

const RecommendationLabel = styled.span``;

interface IProps {
    recommendation?: Recommendation;
}
interface IState {}

export default class StockRecommendation extends React.PureComponent<IProps, IState> {
    public render() {
        const { recommendation } = this.props;

        if (!recommendation) {
            return null;
        }

        let text = "";
        if (recommendation === "buy") {
            text = "Buy";
        } else if (recommendation === "sell") {
            text = "Sell";
        } else {
            text = "Hold";
        }
        return (
            <RecommendationContainer>
                <RecommendationLabel>{"Recommendation :"}</RecommendationLabel>
                <RecommendationBadge recommendation={recommendation}>{text}</RecommendationBadge>
            </RecommendationContainer>
        );
    }
}
