import React from "react";

export interface SelectorItem {
    text: string;
    value: string;
}

interface IProps {
    className: string;
    id?: string;
    items: SelectorItem[];
    name: string;
    onChange?: (value: string) => void;
}
interface IState {}
export default class Selector extends React.PureComponent<IProps, IState> {
    private selectorRef = React.createRef<HTMLSelectElement>();

    private onChange() {
        this.props.onChange?.(this.selectorRef.current?.value || "");
    }

    public render() {
        const { className, id, items, name } = this.props;
        return (
            <select
                ref={this.selectorRef}
                className={className}
                name={name}
                id={id}
                onChange={this.onChange.bind(this)}
            >
                {items.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select>
        );
    }
}
