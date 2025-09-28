export default async function Page({params}:{params:Promise< {id : string }>}) {
const{ id } = await params;

  return (
    <>
      <h1>Student ID : { id } </h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aspernatur necessitatibus accusantium suscipit provident dolore tenetur, voluptatibus asperiores quod tempore quos placeat non nostrum similique maxime nulla dignissimos nemo excepturi.
      </p>
    </>
  );
}