import "./App.css";
import AboutClient from "./components/about-clients/about-clients.component";
import Articles from "./components/articles/articles.component";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import KnowUs from "./components/know-us/know-us.component";
import ServiceList from "./components/service-list/service-list.component";
import Services from "./components/services/services.component";

function App() {
  return (
    <div className="app">
      <div className="upper-section">
        <Header />
        <Home />
      </div>
      <ServiceList />
      <KnowUs />
      <Articles />
      <Services />
      <AboutClient />
      <Footer />
    </div>
  );
}

export default App;
