import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="w-32 h-20">
      <img src="/images/logo.png" alt="nduka logo"  />
    </Link>
  );
};
