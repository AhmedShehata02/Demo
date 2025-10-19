import PostDetails from "@/app/components/PostDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJSX = (<div>Loading post details...</div>)

  return (
    <div className="flex min-h-screen flex-col items-left p-24">
      <h1>Post Details Page</h1>

      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
