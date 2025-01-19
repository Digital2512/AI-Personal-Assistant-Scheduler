import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
        <h1 className="px-4">APAS</h1>
        <Link href="/test" className="px-4">test</Link>
        <div className="px-4">testing name here</div>


    </div>
  );
}
