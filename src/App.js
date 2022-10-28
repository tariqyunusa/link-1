import './App.css';
import { ProfileSelection } from './components/ProfileSelection';
import { TwitterButton } from './components/TwitterButton';
import { ButtonZuri } from './components/ButtonZuri';



function App() {
  return (
    <div className="App">
    <ProfileSelection />
    <div className="container">
      <TwitterButton />
      <ButtonZuri />
    </div>
    
    </div>
  );
}

export default App;
