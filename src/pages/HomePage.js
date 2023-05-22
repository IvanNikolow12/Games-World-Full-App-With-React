import Footer from "../components/Footer";

function HomePage() {

  
  return (
    <>
      <img
        style={{width: '98.7vw', height: '87.8vh', zIndex: '-1'}}
        src="https://i.pinimg.com/originals/38/54/d6/3854d631c9f5eb687ff0c2ae43efc19a.png"
        alt="BackGround"
      />
      <h1 style={{zIndex: '10', display: 'flex', position: 'absolute', top: '150px', left: '50px', fontSize: '90px', width: '600px', fontFamily: 'Roboto'}}>The Game world is here!</h1>
      <Footer/>
    </>
  );
}

export default HomePage;
