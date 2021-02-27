import React from "react";

// models
import { NEUTRAL_COUNT, POSITIVE_COUNT, Sentiment, SocialMediaType } from "api/socialMedia/models";

// component
import { SocialMediaContainer, SocialMediaIcon, SocialMediaCountBadge } from "./SocialMediaCount.style";

// icons
import { FaTwitter, FaReddit } from "react-icons/fa";

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

    private getSocialMediaIcon() {
        return this.props.socialMediaType === "reddit" ? <FaReddit /> : <FaTwitter />;
    }

    public render() {
        if (!this.props.count) {
            return null;
        }

        const icon = this.getSocialMediaIcon();

        return (
            <SocialMediaContainer>
                <SocialMediaIcon>{icon}</SocialMediaIcon>
                <SocialMediaCountBadge sentiment={this.getSentiment()}>{this.props.count}</SocialMediaCountBadge>
            </SocialMediaContainer>
        );
    }
}
