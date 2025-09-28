import Link from "next/link";

export default function MenuMajor() {
  return (
    <>
      <div className="flex justify-center gap-4 pt-6 bg-white text-blue-700">
        <Link href="/major">หน้าหลักสาขาวิชา</Link>
        <br />
        <Link href="/major/account">Account</Link>
        <br />
        <Link href="/major/dm">DM</Link>
        <br />
        <Link href="/major/dti">DTI</Link>
        <br />
        <Link href="/major/marketing">MARKETING</Link>
        
      </div>
    
    </>
  );
}