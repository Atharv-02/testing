import Navbar from "./Navbar";
import "./style.css";
import img from "./7000.png";
function App() {
  return (
    <>
      <div className='total-page'>
        <Navbar />
        <div className='main-head-landing'>
          <div className='main-header'>
            <h3>
              Mental Health Is <br /> Just As Important <br /> As Physical
              Health
            </h3>
            <div className='btn-container'>
              <button className='btn main-page-btn'></button>
            </div>
          </div>
          <div className='main-head-img'>
            <img src={img} alt='' />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
