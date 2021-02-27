import React from "react";

// components
import Header from "ui/header/Header";
import Toolbar from "ui/toolbar/StockToolbar";
import StockSummary from "ui/main/StockSummary";
import Footer from "ui/footer/Footer";
import BaseTheme from "ui/common/theme/baseTheme";

function App() {
    return (
        <div className="App">
            <BaseTheme>
                <Header />
                <Toolbar />
                <StockSummary />
                <Footer />
            </BaseTheme>
        </div>
    );
}

export default App;
