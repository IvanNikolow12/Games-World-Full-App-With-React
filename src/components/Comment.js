function Comment(props) {
  // console.log(props);
  return (
    <>
    <ul style={{padding: '10px', overflowY: 'scroll', maxHeight: '300px'}}>
      {props.comment.comments ? 
      Object.entries(props.comment.comments).map((com) => (
        <li key={com[0]} style={{listStyleType: 'none'}}>
          <div className="comment">
            <div className="name">{com[1].name}</div>
            <div className="date">{com[1].email}</div>
            <div className="content">{com[1].comment}</div>
          </div>
        </li>
      ))
      :
      <>
      <p style={{color: 'white'}}>There have no comments.</p>
      <p style={{color: 'white'}}>Be the first one.</p>
      </>
      }
    </ul>
    </>
  );
}

export default Comment;
