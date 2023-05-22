import { Form } from "react-router-dom";
import "./NewPicture.css";

function NewPicture(props) {

    function SubmitPictureHandler() {
        
    }

  function CancelSubmitHandler() {
    const form = document.getElementById("gallery-form");
    form.classList.remove("show");
  }

  return (
    <>
      <Form method="post" id="gallery-form" className={props.className}>
        <label className="gallery-label" htmlFor="imageURL">
          ImageURL
        </label>
        <input
          className="gallery-input"
          type="url"
          id="imageURL"
          name="imageURL"
          required
        />

        <button onClick={SubmitPictureHandler} className="submit-picture-button new-gallery-button" type="submit">
          Submit
        </button>
        <button
          onClick={CancelSubmitHandler}
          className="cancel-button new-gallery-button"
        >
          Cancel
        </button>
      </Form>
    </>
  );
}

export default NewPicture;

// export async function action({ request, params }) {       //The fetch request is in CommentForm !!!
//   const id = params.id;
//   const data = await request.formData();

//   const pictureBody = {
//     imageURL: data.get("imageURL"),
//   };

//   const response = await fetch(
//     `https://game-world-a66a1-default-rtdb.europe-west1.firebasedatabase.app/games/${id}/pictures.json`,
//     {
//       method: "POST",
//       body: JSON.stringify(pictureBody),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

//   if (!response.ok) {
//     console.log('hi')
//     throw json(
//         { message: "Cloud not fetch events", status: 500 },
//         { status: 500 }
//       );
//   } else {
//     const imageURL = document.getElementById("imageURL");
//     imageURL.value = "";

//     const pictureForm = document.getElementById("gallery-form");
//     pictureForm.classList.remove("show");

//     return redirect(`/games/${id}`);
//   }
// }
