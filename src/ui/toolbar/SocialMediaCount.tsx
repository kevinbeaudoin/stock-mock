import React from "react";

// models
import { NEUTRAL_COUNT, POSITIVE_COUNT, Sentiment, SocialMediaType } from "api/socialMedia/models";

// component
import SocialMediaIcon from "ui/common/SocialMediaIcon";
import { SocialMediaContainer, SocialMediaCountBadge } from "./SocialMediaCount.style";

interface IProps {
    count: number;
    socialMediaType: SocialMediaType;
}
interface IState {}

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
                <SocialMediaIcon socialMediaType={this.props.socialMediaType} />
                <SocialMediaCountBadge sentiment={this.getSentiment()}>{this.props.count}</SocialMediaCountBadge>
            </SocialMediaContainer>
        );
    }
}
