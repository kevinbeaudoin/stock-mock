import React from "react";

// components
import Header from "ui/header/Header";
import StockRecommender from "ui/main/StockRecommender";
import Footer from "ui/footer/Footer";
import BaseTheme from "ui/common/theme/baseTheme";

// style
import styled from "styled-components";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

function App() {
    return (
        <AppContainer>
            <BaseTheme>
                <Header />
                <StockRecommender />
                <Footer />
            </BaseTheme>
        </AppContainer>
    );
}

export default App;
