import MenuBar from "@/components/MenuBar";
import MenuMajor from "@/components/MenuMajor";
import { Itim, Bungee } from "next/font/google";
const itim = Itim({
  subsets: ["thai"],
  weight: ["400"]
});
const bungee = Bungee({
  subsets: ["latin"],
  weight: ["400"]
});
export default function Page() {
  return (
    <>
    <MenuBar />
    <h1 className={`${itim.className} text-center`}>สาขาวิชาต่างๆในมหาวิทยาลัย</h1>
    <MenuMajor />
      <hr/>
      <p className={`${bungee.className} text-center`}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem alias nesciunt, culpa perferendis quae voluptates illum libero expedita impedit? Aperiam voluptatibus veritatis, ipsa facere velit dolor expedita esse nobis eligendi.

      </p>
    </>
  );
}