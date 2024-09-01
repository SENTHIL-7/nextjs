import Link from "next/link";

export default function Nav(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul className="flex">
          <li className="m-10">
            <Link href="/">Home</Link>
          </li>
          <li className="m-10">
            <Link href="/about">About Us</Link>
          </li>
          <li className="m-10">
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </main>
    )
}