import "./App.css";
import { ProfileSelection } from "./components/ProfileSelection";
import { TwitterButton } from "./components/TwitterButton";
import { ButtonZuri } from "./components/ButtonZuri";
import { Book } from "./components/Book";
import { BookPython } from "./components/BookPython";
import { Pitch } from "./components/Pitch";
import { BookDesign } from "./components/BookDesign";
import { SocialSection } from "./components/SocialSection";
import { Footer } from "./components/Footer";
import { ContactForm } from "./components/ContactForm";


function App() {
  return (
      <div className="App">
          <ProfileSelection />
        <div className="container">
          <TwitterButton />
          <ButtonZuri />
          <Book />
          <BookPython />
          <Pitch />
          <BookDesign />
          <ContactForm/>
          <SocialSection />
       </div>
        <Footer />
      </div>

  );
}

export default App;
