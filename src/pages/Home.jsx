import { useSample } from '../hooks/useSample';

export default function Home() {
  const { data, isLoading, error } = useSample('/posts');

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Posts</h1>
      <div className="grid gap-4">
        {data?.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm">
              Post ID: {post.id} | User ID: {post.userId}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
