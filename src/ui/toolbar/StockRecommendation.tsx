import React from "react";

// models
import { Recommendation } from "api/recommendation/models";

// components
import { RecommendationContainer, RecommendationBadge } from "./StockRecommendation.style";

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
                <RecommendationBadge recommendation={recommendation}>{text}</RecommendationBadge>
            </RecommendationContainer>
        );
    }
}
