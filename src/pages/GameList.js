import {  NavLink } from 'react-router-dom';
import './GamesPage.css'
import Footer from '../components/Footer';

function GameList({ games }) {
  // console.log((games[1].summary).toString().substring(0, 73) + '...'})
  return (
    <>
      <ul className="game-container">
        {Object.entries(games).map((game) => (
          <li className='game-list-item' key={game[0]}>
            <div className="game-card">
              <img src={game[1].imageUrl} alt={game[1].title} />
              <h2>{game[1].title}</h2>
              <p>{(game[1].category)}</p>
              <button>
                <NavLink to={game[0]}>Details</NavLink>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <Footer/>
    </>
  );
}

export default GameList;
