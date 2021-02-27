import React from "react";

// style
import styled, { css } from "styled-components";

export interface SelectorItem {
    text: string;
    value: string;
}

const BaseSelect = styled.select(
    ({ theme }) => css`
        background-color: ${theme.defaultBgColor};
        border: ${theme.lightBorderColor};
        border-radius: ${theme.radiusMd};
        box-shadow: none;
        color: ${theme.colorText};
        font-size: ${theme.fontSizeMd};
        margin: ${theme.spacingXs};
        padding: ${theme.spacingSm};

        :active {
            border: ${theme.activeBorderColor};
        }
        :focus {
            outline: 0;
            box-shadow: rgb(255 255 255) 0px 0px 0px 1px, rgb(5 180 110 / 30%) 0px 0px 0px 4px;
        }
    `,
);

interface IProps {
    className?: string;
    id?: string;
    items: SelectorItem[];
    name: string;
    value: string;
    onChange?: (value: string) => void;
}
interface IState {}
export default class Selector extends React.PureComponent<IProps, IState> {
    private selectorRef = React.createRef<HTMLSelectElement>();

    private onChange() {
        this.props.onChange?.(this.selectorRef.current?.value || "");
    }

    public render() {
        const { className, id, items, name, value } = this.props;
        return (
            <BaseSelect
                ref={this.selectorRef}
                className={className}
                name={name}
                id={id}
                onChange={this.onChange.bind(this)}
                value={value}
            >
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </BaseSelect>
        );
    }
}
