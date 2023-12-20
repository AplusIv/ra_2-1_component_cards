import './App.css';
import Cards from './components/Cards';
import dmPic from './components/img/dm.webp';

function App() {
  return (
    <>
      <Cards src={dmPic}>
        <img src={dmPic} className="card-img-top" alt="some img"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </Cards>
      <Cards>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <button className="btn btn-primary">Go somewhere</button>
        </div>
      </Cards>
    </>
  );
}

export default App;
