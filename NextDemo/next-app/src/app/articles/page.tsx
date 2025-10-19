import Link from "next/link";

export default function Posts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">articles Page</h1>
      <button>
        <Link href="/">Go to Home Page</Link>
        <br />
        <Link href="/posts">Go to Posts Page</Link>
      </button>
    </main>
  );
}