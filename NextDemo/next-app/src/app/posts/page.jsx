import Todo from "../components/todo";
import Link from "next/link";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
    // cache: "force-cache", // SSG
    // cache: "no-store", // SSR
    // next: { revalidate: 30 }, // ISR
  });
  const posts = await response.json();
  // console.log(posts);

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} key={post.id} className="no-underline">
      <div className="mb-4 p-4 border rounded" >
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p>{post.body}</p>
      </div>
      </Link>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Posts Page</h1>
      {/* <h2>{post.title}</h2> */}
      {/* <div>
        <Todo />
      </div> */}

      {/* Posts */}
      {postsJSX}
    </main>
  );
}
