//rfc snippet สร้าง Function Component ทั่วๆ ไป
//np snippet สร้าง page Component
import MenuBar from "@/components/MenuBar";
export default function Page() {
  return (
    <>
      <MenuBar />
      <h1 className="text-center">Welcome to DTI-SAU</h1>
      <h1 className="text-center font-bold  text-green-800">
        Kritsana Rachasuth
      </h1>
      <hr/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem alias nesciunt, culpa perferendis quae voluptates illum libero expedita impedit? Aperiam voluptatibus veritatis, ipsa facere velit dolor expedita esse nobis eligendi.

      </p>
    </>
  );
}