import { Form, redirect, useNavigate, json } from 'react-router-dom';
import './GameForm.css'

function GameForm({ method, game }) {
  let title = 'Add a New Game'
  if(method === 'patch') {
    title = 'Edit The Game'
  }

  const navigate = useNavigate();

  function cancelHandler() {
    navigate('..')
  }

  return (
    <>
    <div className='back-ground'>
      <div className="form-container">
        <h2>{title}</h2>
        <Form method={method}>
          <div className="form-field">
            <label htmlFor="game-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="game-title"
              name="title"
              className="form-input"
              placeholder="Enter game title"
              required
              defaultValue={game ? game.title : ''}
            />
          </div>
          <div className="form-field">
            <label htmlFor="game-description" className="form-label">
              Description
            </label>
            <textarea
              id="game-description"
              name="summary"
              className="form-textarea"
              placeholder="Enter game summary"
              required
              defaultValue={game ? game.summary : ''}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="game-genre" className="form-label">
              Category
            </label>
            <input
              type="text"
              id="game-genre"
              name="category"
              className="form-input"
              placeholder="Enter game category"
              defaultValue={game ? game.category : ''}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="game-maxLevel" className="form-label">
              Max Level
            </label>
            <input
              type="text"
              id="game-maxLevel"
              name="maxLevel"
              className="form-input"
              defaultValue={game ? game.maxLevel : ''}
              placeholder="Enter game max level"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="game-image" className="form-label">
              Image URL
            </label>
            <input
              type="url"
              id="game-image"
              name="imageUrl"
              className="form-input"
              placeholder="Enter image URL"
              defaultValue={game ? game.imageUrl : ''}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="game-image" className="form-label">
              Video Trailer URL
            </label>
            <input
              type="url"
              id="game-video"
              name="videoUrl"
              className="form-input"
              placeholder="Enter video URL"
              defaultValue={game ? game.videoUrl : ''}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="game-image" className="form-label">
              Official WebSite URL
            </label>
            <input
              type="url"
              id="game-website"
              name="webSite"
              className="form-input"
              placeholder="Enter web site URL"
              defaultValue={game ? game.webSite : ''}
              required
            />
          </div>
          <button type="submit" className="form-submit">
            Save
          </button>
          <button type='button' className="form-submit" onClick={cancelHandler}>Cancel</button>
        </Form>
      </div>
    </div>
    </>
  );
}

export async function action({ request, params}) {
  const method = request.method;
  const data = await request.formData();

  let gameBody = {
    title: data.get('title'),
    imageUrl: data.get('imageUrl'),
    summary: data.get('summary'),
    maxLevel: data.get('maxLevel'),
    category: data.get('category'),
    videoUrl: data.get('videoUrl'),
    webSite: data.get('webSite'),
  }
  console.log(data)
  console.log(gameBody)

  let url = `https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games.json`

  

  if(method === 'PATCH') {
    let id = params.id;
    url = `https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}.json`
  }

  const response = await fetch(url, {
    method: method,
    body: JSON.stringify(gameBody),
    headers: {
      "content-type": "application/json",
    },
  })

  if(!response.ok) {
    throw json(
      { message: "Cloud not fetch events", status: 500 },
      { status: 500 }
    );
  }

  return redirect('..')

}

export default GameForm;

