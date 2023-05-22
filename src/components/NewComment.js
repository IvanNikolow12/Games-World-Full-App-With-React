import { Form, json, redirect } from "react-router-dom";

import './NewComment.css'

function NewComment(props) {

  function SubmitCommentHandler() {
  }

    function CancelCommentHandler() {
            const form = document.getElementById('comment-form')
            form.classList.remove('show')
    }


  return (
    <Form method="post" id="comment-form" className={props.className}>
      <span name="commnent-form"></span>
      <label className="comment-label" htmlFor="name">Name:</label>
      <input className="comment-input" type="text" id="name" name="name" required />

      <label className="comment-label" htmlFor="email">Email:</label>
      <input className="comment-input" type="email" id="email" name="email" required />

      <label className="comment-label" htmlFor="comment">Comment:</label>
      <textarea className="comment-text-area" id="comment" name="comment" required></textarea>

      <button onClick={SubmitCommentHandler} className="submit-button new-comment-button" type="submit">Submit</button>
      <button onClick={CancelCommentHandler} className="cancel-button new-comment-button">Cancel</button>
    </Form>
  );
}

export default NewComment;


export async function action({ request, params}) {

  const id = params.id;
  const data = await request.formData();
  
  const formId = data.get('email');

  
  let name = data.get('name');
  let email = data.get('email');
  let comment = data.get('comment');
  let imageURL = data.get('imageURL');

  const commentBody = {}

  if(imageURL != null) {
    Object.assign(commentBody, {imageURL})
  } else {
    Object.assign(commentBody, {name, email, comment})
  }

  let response;

  if(formId != null) {
    response = await fetch(`https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}/comments.json`, {
      method: "POST",
      body: JSON.stringify(commentBody),
      headers: {
        "content-type": "application/json",
      }
  })
  if(!response.ok) {
    throw json(
      { message: "Cloud not fetch events", status: 500 },
      { status: 500 }
    );
  }else {
    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')
    const commentInput = document.getElementById('comment')

      nameInput.value = '';
      emailInput.value = '';
      commentInput.value = '';

      const commentForm = document.getElementById('comment-form')
        commentForm.classList.remove('show')

    return redirect(`/games/${id}`)
  }
  } else {
    response = await fetch(`https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}/pictures.json`, {
      method: "POST",
      body: JSON.stringify(commentBody),
      headers: {
        "content-type": "application/json",
      }
  })
  if(!response.ok) {
    throw json(
      { message: "Cloud not fetch events", status: 500 },
      { status: 500 }
    );
  }else {
    const imageURLInput = document.getElementById('imageURL')
      imageURLInput.value = '';

      const galleryForm = document.getElementById('gallery-form')
      galleryForm.classList.remove('show')

    return redirect(`/games/${id}`)
  }
  }


  // if(!response.ok) {
  //   throw json(
  //     { message: "Cloud not fetch events", status: 500 },
  //     { status: 500 }
  //   );
  // }else {
  //   const nameInput = document.getElementById('name')
  //   const emailInput = document.getElementById('email')
  //   const commentInput = document.getElementById('comment')
  //   const imageURLInput = document.getElementById('imageURL')

  //   if(nameInput !== null) {
  //     nameInput.value = '';
  //     emailInput.value = '';
  //     commentInput.value = '';

  //     const commentForm = document.getElementById('comment-form')
  //       commentForm.classList.remove('show')
  //   }
  //   if(imageURLInput !== null) {
  //     imageURLInput.value = '';

  //     const galleryForm = document.getElementById('gallery-form')
  //     galleryForm.classList.remove('show')
  //   }



  //   return redirect(`/games/${id}`)
  // }


}

