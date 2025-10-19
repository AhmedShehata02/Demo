export default async function PostDetails({ postId }) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: { revalidate: 120 },
    }
  );
  const post = await response.json();

  return (
    <div>
      <div>
        <h2> title : {post.title} </h2>
        <hr />
        <p> Body : {post.body} </p>
      </div>
    </div>
  );
}
