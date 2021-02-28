import React from "react";

// model
import { SocialMediaType } from "api/socialMedia/models";

// icons
import { FaTwitter, FaReddit } from "react-icons/fa";

// style
import styled, { css } from "styled-components";

export const IconContainer = styled.div(
    ({ theme }) => css`
        font-size: ${theme.spacingLg};
        width: 24px;
        height: 24px;
    `,
);

interface IProps {
    socialMediaType: SocialMediaType;
}
interface IState {}

export default class SocialMediaIcon extends React.PureComponent<IProps, IState> {
    private getSocialMediaIcon() {
        return this.props.socialMediaType === "reddit" ? <FaReddit /> : <FaTwitter />;
    }

    public render() {
        return <IconContainer>{this.getSocialMediaIcon()}</IconContainer>;
    }
}
