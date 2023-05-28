// import logo from './logo.svg';
import Accordion from './Accordion';
import './App.css';
import Navbar from './Navbar';
import Text from './Text';

function App() {
  return (
    <>
    <div className="main_div">
      
    <Navbar className="contaier "/>
        <div className='container '>
    {/* <div className="class"></div> */}
   
    <Text className="m-5 bg-dark "/>
    <Accordion/>
    </div>
    </div>
    </>


  );
}

export default App;
