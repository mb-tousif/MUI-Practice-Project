import './App.css';
import ContactForm from './Components/Contact/ContactForm';
import Footer from './Components/Footer/Footer';
import GridLayout from './Components/GridLayout/GridLayout';
import Header from './Components/Header/Header';
import TopBanner from './Components/TopBanner/TopBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <TopBanner />
      <GridLayout />
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
