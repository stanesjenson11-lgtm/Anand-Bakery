import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F8F3EA] text-[#1A0D08] text-center">
      <span className="font-mono text-xs font-bold tracking-widest text-[#D68A36] uppercase mb-2">
        404 • Page Not Found
      </span>
      <h1 className="font-serif text-3xl sm:text-5xl font-black mb-4">
        Lost in the Bakery?
      </h1>
      <p className="text-sm text-[#1A0D08]/70 max-w-md mb-6">
        The page you are looking for has been moved or fresh out of the oven. Return to the aroma of our 1968 Star Cake.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#D68A36] text-[#1A0D08] font-mono text-xs font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
      >
        Back to Home
      </Link>
    </div>
  );
}
