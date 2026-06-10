export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        404
      </h1>
      <h2 className="text-2xl text-gray-400 mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist
      </p>
      <button 
        onClick={() => window.location.href = '/'}
        className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
      >
        Go Home
      </button>
    </div>
  )
}