import React from "react";

// component
import Selector, { SelectorItem } from "ui/common/Selector";

interface IProps {
    days: number;
    onHorizonChanged: (days: number) => void;
}
interface IState {}

const defaultHorizons = [1, 2, 3, 5, 10, 30, 60, 180];

export default class StockHorizonSelector extends React.PureComponent<IProps, IState> {
    private buildDaysItems(): SelectorItem[] {
        return defaultHorizons.map((day) => {
            return { text: day.toString(), value: day.toString() } as SelectorItem;
        });
    }

    private onSelectChanged(value: string) {
        const days = parseInt(value) || 10;
        this.props.onHorizonChanged(days);
    }

    public render() {
        return (
            <Selector
                name="daysHorizon"
                items={this.buildDaysItems()}
                value={this.props.days?.toString()}
                onChange={this.onSelectChanged.bind(this)}
            />
        );
    }
}
