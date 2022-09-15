import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pageheading from './components/pageHeading';
import Mainpage from './components/mainpage';
import Footer from './components/footer';
import "@fontsource/poppins";

function App() {
  return (
    <div className="app">
      <Pageheading/>
      <Mainpage/>
      <Footer/>
    </div>
  )
}

export default App;
