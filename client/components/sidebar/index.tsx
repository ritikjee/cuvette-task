import Link from "next/link";

import axios from "axios";

import AddCollection from "./add-collection";
import Avatar from "../avatar";

async function Sidebar() {
  var collections = [];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/collection/get-collection`
    );
    collections = data;
  } catch (error) {
    console.log(error);
    collections = [];
  }

  return (
    <div className="w-[300px] 2xl:w-[500px] h-screen relative">
      <h1 className="text-2xl py-10 text-center font-semibold">Pocket Notes</h1>
      <div className=" h-full w-full overflow-y-auto">
        {collections.map((collection: any) => {
          return (
            <Link href={`/collection/${collection._id}`} key={collection._id}>
              <div className="flex items-center justify-start gap-5 pl-10 pb-5 font-semibold">
                <Avatar name={collection.title} color={collection.color} />
                <p>{collection.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <AddCollection />
    </div>
  );
}

export default Sidebar;
