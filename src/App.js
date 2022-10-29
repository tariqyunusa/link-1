import './App.css';
import { ProfileSelection } from './components/ProfileSelection';
import { TwitterButton } from './components/TwitterButton';
import { ButtonZuri } from './components/ButtonZuri';
import { Book } from './components/Book';
import { BookPython } from './components/BookPython';
import { Pitch } from './components/Pitch';
import { BookDesign } from './components/BookDesign';



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
    </div>
    
    </div>
  );
}

export default App;
