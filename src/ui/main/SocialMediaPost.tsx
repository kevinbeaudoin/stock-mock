import React from "react";

// model
import { ISocialMediaPost } from "api/socialMedia/models";

// component
import SocialMediaIcon from "ui/common/SocialMediaIcon";

// style
import styled, { css } from "styled-components";

const SocialMediaCard = styled.li(
    ({ theme }) => css`
        border: ${theme.lightBorderColor};
        border-radius: ${theme.radiusMd};
        height: 100px;
        margin: ${theme.spacingSm};
        padding: ${theme.spacingSm};
        width: 200px;
        :first {
            margin-left: ${theme.spacingMd};
        }
    `,
);

const SocialMediaMessage = styled.span(
    ({ theme }) => css`
        display: block;
        margin-top: ${theme.spacingSm};
    `,
);

interface IProps {
    post: ISocialMediaPost;
}
interface IState {}

export default class SocialMediaPost extends React.PureComponent<IProps, IState> {
    public render() {
        const { post } = this.props;
        return (
            <SocialMediaCard>
                <SocialMediaIcon socialMediaType={post.socialMediaType} />
                <SocialMediaMessage>{post.message}</SocialMediaMessage>
            </SocialMediaCard>
        );
    }
}
