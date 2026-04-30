import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
      
        <h1 className="text-9xl font-extrabold text-gray-200 tracking-widest">
          404
        </h1>
        
       
        <div className="bg-blue-600 text-white px-2 text-sm rounded rotate-12 absolute transform -translate-y-20 translate-x-24 hidden md:block">
          Page Not Found
        </div>

        <div className="mt-4">
          <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Looks like you are  lost.
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            The page you are looking for is not available or has been moved.
          </p>
        </div>

        
        <div className="mt-10">
          <Link
            href="/"
            className="px-8 py-3 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}