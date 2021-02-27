import React from "react";

// models
import { NEUTRAL_COUNT, POSITIVE_COUNT, SocialMediaType } from "api/socialMedia/models";

// style
import styled, { css } from "styled-components";

const SocialMediaContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        margin: ${theme.spacingMd};
        align-items: center;
    `,
);

const SocialMediaLabel = styled.span``;

const SocialMediaCountBadge = styled.span<{ sentiment: Sentiment }>(
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

interface IProps {
    count: number;
    socialMediaType: SocialMediaType;
}
interface IState {}

type Sentiment = "positive" | "neutral" | "negative";

export default class SocialMediaCount extends React.PureComponent<IProps, IState> {
    private getSentiment(): Sentiment {
        if (this.props.count > POSITIVE_COUNT) {
            return "positive";
        } else if (this.props.count > NEUTRAL_COUNT) {
            return "neutral";
        } else {
            return "negative";
        }
    }

    public render() {
        if (!this.props.count) {
            return null;
        }
        return (
            <SocialMediaContainer>
                <SocialMediaLabel>{this.props.socialMediaType}</SocialMediaLabel>
                <SocialMediaCountBadge sentiment={this.getSentiment()}>{this.props.count}</SocialMediaCountBadge>
            </SocialMediaContainer>
        );
    }
}
