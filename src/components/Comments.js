import React from 'react'

const Comments = (props) => {

    const {comments} = props;
  return (
    <div>
     <h3>{comments.comment}:-  {comments.sentiment}</h3>
    </div>
  )
}

export default Comments
