import './App.css';
import './css/landingpage.css'
import Navigasi from "./component/Navigasi";
import Intro from "./component/Intro";
import Avenger from "./component/Avenger";
import Disny from "./component/Disny";
// import Footer from "./component/Footer";
// import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <div>
      {/* intro  */}
      <div className='mybg'>
        <Navigasi/>
        <Intro/>
      </div>
      {/* end intro */}

      {/* avenger */}
      <div className='avenger'>
        <Avenger/>
      </div>
      {/* end avenger */}
      {/* disny */}
      <div className='disney'>
        <Disny/>
      </div>
      {/* ebd disny */}
    </div>
  );
}

export default App;
