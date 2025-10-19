import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4 text-lg">This is a sample Next.js application.</p>
      <button>
        <Link href="/">Go to Home Page</Link>
        <br />
        <Link href="/posts">Go to Posts Page</Link>
      </button>
    </main>
  );
}
