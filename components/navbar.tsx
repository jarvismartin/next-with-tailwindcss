import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  console.log("ROUTER:", router);

  const links = [
    { display: "Home", href: "/" },
    { display: "About", href: "/about" },
    { display: "Neem", href: "/neem" },
  ];
  const nav = links.map((link) => {
    const style = {
      borderBottom: router.asPath === link.href ? "2px solid" : "none",
    };

    return (
      <Link
        key={link.display}
        href={link.href}
        className="font-semibold mr-4"
        style={style}
      >
        {link.display}
      </Link>
    );
  });

  return (
    <section className="flex border-b-2 border-gray-300 fixed top-0 left-0 w-full p-4 items-center justify-between">
      <div>
        <Link href="/" className="text-xl font-semibold flex items-center">
          <Image
            src="/images/DollifyMe.png"
            alt="jarvism logo"
            width={30}
            height={30}
            className="rounded-full mr-2"
          />
          <span className="">jarvism</span>
        </Link>
      </div>
      <div>
        {/* <Link href="/" className="font-semibold mr-2">
          Home
        </Link>
        <Link href="/about" className="font-semibold mr-2">
          About
        </Link> */}
        {nav}
      </div>
    </section>
  );
}
