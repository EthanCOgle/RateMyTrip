import Post from './Post'

const Posts = ({ posts }) => {
  return (
    <>
    {posts.map((post) => (
    <Post key={post.id} post={post}></Post>
    ))}
    </>
  )
}

export default Posts