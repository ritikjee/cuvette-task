import axios from "axios";
import { redirect } from "next/navigation";

import { Dot } from "lucide-react";

import Navbar from "@/components/navbar";
import Input from "@/components/note-input";
import { returnDateAndTime } from "@/lib/utils";

async function CollectionIdPage({
  params,
}: {
  params: {
    collectionId: string;
  };
}) {
  var notes = [];
  var collection: any = {};
  try {
    [{ data: notes }, { data: collection }] = await Promise.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/notes/get-notes/${params.collectionId}`
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/collection/get-collection/${params.collectionId}`
      ),
    ]);
  } catch (error) {
    console.log("CollectionIdPage error", error);
    return redirect("/not-found");
  }

  return (
    <div className="bg-[#DAE5F5] h-screen w-full flex flex-col">
      <Navbar color={collection.color} name={collection.title} />
      <div className="flex flex-1 overflow-auto">
        <div className="flex flex-col gap-5 w-full p-10">
          {notes.length > 0 ? (
            <>
              {notes.map((note: any) => {
                return (
                  <div
                    key={note._id}
                    className="bg-white p-5 rounded-md shadow-md flex flex-col  gap-7"
                  >
                    <div>
                      <p>{note.description}</p>
                    </div>
                    <div className="flex items-center justify-end ">
                      <p>
                        {returnDateAndTime(note.createdAt).dayWithMonthWithYear}
                      </p>
                      <Dot className="w-10 h-10 " />
                      <p>{returnDateAndTime(note.createdAt).time}</p>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="h-full w-ful flex items-center justify-center ">
              No Notes yet.
            </div>
          )}
        </div>
      </div>
      <div>
        <Input collectionId={params.collectionId} />
      </div>
    </div>
  );
}

export default CollectionIdPage;
