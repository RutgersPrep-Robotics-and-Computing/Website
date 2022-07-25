import w from './wave3.svg';
import Header from './components/Header'
import Bar from './components/Bar'
import Footer from './components/Footer'
import waves from './components/waves'
import logo from './components/logo'
import './App.css';

function App() {
  let name = "Max"
  return (
    <div>
      <div className="container">
        <Bar />
      </div>

      <div className="waves">
        <waves />
      </div>
      <div>
        <Header />
      </div>
      <div className="logo">
          <logo />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br></p>
      <div className="footer">
        <Footer title='Socials' />
      </div>
      <div>
        {/* <iframe src="https://calendar.google.com/calendar/embed?src=h4okvr4mkv2qhch9huh77mkko0%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> */}
      </div>
      
    </div>
    
  );
}

export default App;
