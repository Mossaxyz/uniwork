import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen mb-8 flex-col items-center p-24">
      <div className=" ">
        <Image src="/Group21.png" alt="Next.js Logo" width={300} height={300} />
        <h2 className="mb-5 text-4xl font-bold text-center">Demo</h2>
      </div>
      <div className="flex min-h-screen mb-8 flex-col items-center p-10">
        <Link href="/">
          <button type="button" className="button secondary medium">
            Go Home
          </button>
        </Link>
        <div className="p-4 text lead bold">
          <h1>Success. Your payment has been processed!</h1>
        </div>
      </div>
    </main>
  );
}
