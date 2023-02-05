//post: start, end, image, date, description

const Post = ({ post }) => {
  return (
    <div>
      <h3>Trip: {post.start} to {post.end}</h3>
      <img src={post.image} alt="Trip Picture" width="100" height="100"></img>
      <p>
        Date: {post.date}
        Description: {post.description}
      </p>
    </div>
  )
}

export default Post