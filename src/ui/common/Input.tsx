import React from "react";

export type InputType = "text" | "search";

export interface IProps {
    className?: string;
    id?: string;
    inputType?: InputType;
    maxLength?: number;
    name?: string;
    placeholder?: string;
    value: string;
    onChange?: (value: string) => void;
    onChangeFocus?: (focus: boolean) => void;
    onSubmit?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface IState {}

export default class Input extends React.PureComponent<IProps, IState> {
    public static defaultProps: Partial<IProps> = {
        inputType: "text",
        onChange: () => {},
    };

    private inputRef = React.createRef<HTMLInputElement>();

    private onChange() {
        this.props.onChange?.(this.inputRef.current?.value || "");
    }

    private onSubmit(e: React.FormEvent<HTMLInputElement>) {
        this.props.onSubmit?.(e);
    }

    public render() {
        return (
            <input
                ref={this.inputRef}
                className={this.props.className}
                id={this.props.id}
                type={this.props.inputType}
                maxLength={this.props.maxLength}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.onChange.bind(this)}
                onSubmit={this.onSubmit.bind(this)}
            />
        );
    }
}
