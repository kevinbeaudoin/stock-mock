import React from "react";

// model
import { SocialMediaType } from "api/socialMedia/models";

// component
import Selector, { SelectorItem } from "ui/common/Selector";

interface IProps {
    socialMediaType: SocialMediaType;
    onSocialMediaChanged: (socialMedia: SocialMediaType) => void;
}
interface IState {}

const defaultSocialMediaItems: SelectorItem[] = [
    { text: "Twitter", value: "twitter" },
    { text: "Reddit", value: "reddit" },
];

export default class SocialMediaSelector extends React.PureComponent<IProps, IState> {
    private onSelectChanged(value: string) {
        this.props.onSocialMediaChanged(value as SocialMediaType);
    }

    public render() {
        return (
            <Selector
                name="daysHorizon"
                items={defaultSocialMediaItems}
                value={this.props.socialMediaType}
                onChange={this.onSelectChanged.bind(this)}
            />
        );
    }
}
