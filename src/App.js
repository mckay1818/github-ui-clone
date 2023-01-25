import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import LoginControls from "./components/LoginControls";
import HeroSection from "./components/HeroSection";
import NewsletterForm from "./components/NewsletterForm";
import StatsBar from "./components/StatsBar";

function App() {
  return (
    <div className="landing-page">
      <header>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
        <LoginControls></LoginControls>
      </header>
      <main>
        <HeroSection></HeroSection>
        <NewsletterForm></NewsletterForm>
      </main>
      <footer>
        <StatsBar></StatsBar>
      </footer>
    </div>
  );
}

export default App;
