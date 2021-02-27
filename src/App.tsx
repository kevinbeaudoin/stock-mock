import React from "react";

// components
import Header from "ui/header/Header";
import Toolbar from "ui/toolbar/StockToolbar";
import StockSummary from "ui/main/StockSummary";
import Footer from "ui/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <Toolbar />
            <StockSummary />
            <Footer />
        </div>
    );
}

export default App;
