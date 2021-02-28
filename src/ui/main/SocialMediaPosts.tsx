import React from "react";

// model
import { ISocialMediaPost, SocialMediaType } from "api/socialMedia/models";

// api
import getSocialMediaPosts from "api/socialMedia/getTopSocialMediaPosts";

// component
import SocialMediaPost from "ui/main/SocialMediaPost";

// style
import styled from "styled-components";

const SocialMediaPostContainer = styled.ul`
    display: flex;
    flex: 1 1 auto;
    list-style: none;
    padding: 0;
`;

interface IProps {
    stockSymbol: string;
    socialMediaType: SocialMediaType;
}
interface IState {
    posts: ISocialMediaPost[];
}

export default class SocialMediaPosts extends React.PureComponent<IProps, IState> {
    public state: IState = {
        posts: [],
    };

    public componentDidUpdate(prevProps: IProps) {
        if (
            prevProps.stockSymbol !== this.props.stockSymbol ||
            prevProps.socialMediaType !== this.props.socialMediaType
        ) {
            this.loadSocialMediaPosts();
        }
    }

    private async loadSocialMediaPosts() {
        const { stockSymbol, socialMediaType } = this.props;
        const posts = await getSocialMediaPosts(stockSymbol, socialMediaType, 0, 2);
        this.setState({
            posts,
        });
    }

    public render() {
        return (
            <SocialMediaPostContainer>
                {this.state.posts.map((post, index) => (
                    <SocialMediaPost key={index} post={post} />
                ))}
            </SocialMediaPostContainer>
        );
    }
}
