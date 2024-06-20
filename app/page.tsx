import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen mb-8 flex-col items-center p-24">
      <div className=" ">
        <Image src="/Group21.png" alt="Next.js Logo" width={300} height={300} />
        <h2 className="mb-5 text-4xl font-bold text-center">Demo</h2>
      </div>
      <div className="flex min-h-screen mb-8 flex-col items-center p-24">
        <Link href="/payment">
          <button type="button" className="button secondary medium">
            start
          </button>
        </Link>
        <p className="m-0 max-w-[30ch] text-sm opacity-50 flex text-center mt-3">
          Press button to start the demo
        </p>
      </div>
    </main>
  );
}
