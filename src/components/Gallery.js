import { json, useRouteLoaderData } from 'react-router-dom';
import './Gallery.css';

function Gallery() {
  const data = useRouteLoaderData('game-detail');
  const finishedGallery = [];

  if(data.pictures !== undefined) {
    const allGalleryArray = Object.entries(data.pictures);
  
    for(let i = 1; i <= 3; i++) {
      const picture = allGalleryArray.pop();
      finishedGallery.push(picture);
      if(picture === undefined) {
        finishedGallery.pop()
      }
    }
  }

    return <>
        <div className="game-gallery">
          <ul>
            {finishedGallery.length !== 0 ? 
            finishedGallery.map((pic) => <li key={pic[0]}><img className="game-gallery__img" src={pic[1].imageURL} alt={pic[0]} /></li>)
            :
              <div className='no-gallery'>
                <h1>There have no Gallery yet</h1>
              </div>}
          </ul>
        </div>
    </>
}

export default Gallery;

export async function loader({request, params}) {
  const id = params.id;

  const response = await fetch(`https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}/pictures.json`)

  if(!response.ok) {
    throw json({message: 'Cloud not fetch data'}, {status: 500});
  } else {
    return response;
  }
}