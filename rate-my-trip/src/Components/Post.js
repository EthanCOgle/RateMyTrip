const Post = ({ post }) => {
  return (
    <div>
      <h3>
        {post.image}
      </h3>
      <p>
        {post.start}
        {post.end}
      </p>
    </div>
  )
}

export default Post