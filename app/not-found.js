import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-gray-400 mb-6">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 hover:text-[#e558e5]  text-white ">
        Return Home
      </Link>
    </div>
  );
}
