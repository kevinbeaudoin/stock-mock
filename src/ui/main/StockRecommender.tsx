import React from "react";

// models
import { SocialMediaType } from "api/socialMedia/models";
import { IStockRecommendation, Recommendation } from "api/recommendation/models";

// api
import getStockPrices from "api/stockPrice/getStockPrice";
import getSocialMediaCount from "api/socialMedia/getSocialMediaCount";
import getRecommendation from "api/recommendation/getRecommendation";

// component
import StockFinder from "ui/toolbar/StockFinder";
import StockHorizonSelector from "ui/toolbar/StockHorizonSelector";
import SocialMediaSelector from "ui/toolbar/SocialMediaSelector";
import StockPrices from "ui/main/StockPrices";
import SocialMediaPosts from "ui/main/SocialMediaPosts";
import SocialMediaCount from "ui/toolbar/SocialMediaCount";
import StockRecommendation from "ui/toolbar/StockRecommendation";
import { MainSection, StockToolbar, StockPricesSection } from "./StockRecommender.style";

interface IProps {}
interface IState {
    daysHorizon: number;
    socialMediaCount: number;
    socialMediaType: SocialMediaType;
    stockPrices: number[];
    stockSymbol: string;
    stockRecommendation?: Recommendation;
}

export default class StockRecommender extends React.PureComponent<IProps, IState> {
    public state: IState = {
        daysHorizon: 10,
        socialMediaCount: 0,
        socialMediaType: "twitter",
        stockPrices: [],
        stockSymbol: "",
        stockRecommendation: undefined,
    };

    private async onStockSymbolChanged(stockSymbol: string) {
        this.setState(
            {
                stockSymbol,
            },
            this.loadStockData,
        );
    }

    private onHorizonChanged(daysHorizon: number) {
        this.setState(
            {
                daysHorizon,
            },
            this.loadStockData,
        );
    }

    private onSocialMediaChange(socialMediaType: SocialMediaType) {
        this.setState(
            {
                socialMediaType,
            },
            this.loadStockData,
        );
    }

    private buildRecommendationParams(): IStockRecommendation {
        // TODO: add extra logic here in case we add other algorithm.
        return { stockPrices: this.state.stockPrices, socialMediaCounts: this.state.socialMediaCount };
    }

    private async loadRecommendation() {
        const stockRecommendation = await getRecommendation(this.buildRecommendationParams());
        this.setState({
            stockRecommendation,
        });
    }

    private async loadStockData() {
        const { daysHorizon, socialMediaType, stockSymbol } = this.state;

        if (!stockSymbol) {
            return;
        }

        const toDate = new Date();
        const fromDate = new Date();
        fromDate.setDate(toDate.getDate() - daysHorizon);

        const stockPrices = await getStockPrices(stockSymbol, fromDate, toDate);
        const socialMediaCount = await getSocialMediaCount(stockSymbol, socialMediaType);

        this.setState(
            {
                socialMediaCount,
                stockPrices,
            },
            this.loadRecommendation,
        );
    }

    public render() {
        const {
            daysHorizon,
            socialMediaCount,
            stockRecommendation,
            socialMediaType,
            stockPrices,
            stockSymbol,
        } = this.state;
        return (
            <MainSection>
                <StockToolbar>
                    <StockFinder onStockSymbolChanged={this.onStockSymbolChanged.bind(this)} />

                    <SocialMediaSelector
                        socialMediaType={socialMediaType}
                        onSocialMediaChanged={this.onSocialMediaChange.bind(this)}
                    />
                    <StockHorizonSelector days={daysHorizon} onHorizonChanged={this.onHorizonChanged.bind(this)} />
                    <SocialMediaCount count={socialMediaCount} socialMediaType={socialMediaType} />
                    <StockRecommendation recommendation={stockRecommendation} />
                </StockToolbar>
                <StockPricesSection>
                    <StockPrices prices={stockPrices} />
                </StockPricesSection>
                <SocialMediaPosts stockSymbol={stockSymbol} socialMediaType={socialMediaType} />
            </MainSection>
        );
    }
}
