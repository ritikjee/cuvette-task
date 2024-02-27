"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function AddCollection() {
  const router = useRouter();

  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const [values, setValues] = useState({
    groupName: "",
    groupColor: "#B38BFA",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/collection/create-collection`,
        {
          title: values.groupName,
          color: values.groupColor,
        }
      );

      router.refresh();

      toast.success("Group created successfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setValues({ groupName: "", groupColor: "#B38BFA" });
    }
  };

  return (
    <div className="absolute bottom-6 right-6">
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-[#16008B] hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full text-4xl ">
            +
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New group</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col justify-start items-start gap-4 space-y-4 pb-4">
            <div className="flex items-center justify-center gap-4">
              <h3 className="font-semibold">Group Name</h3>
              <input
                type="text"
                name="groupName"
                value={values.groupName}
                onChange={(e) =>
                  setValues({ ...values, groupName: e.target.value })
                }
                className="border border-gray-300 p-1 rounded-lg"
                placeholder="Enter group name"
              />
            </div>
            <div className="flex items-center justify-center gap-4">
              <h3 className="font-semibold">Choose colour</h3>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <div
                    key={color}
                    onClick={() => setValues({ ...values, groupColor: color })}
                    className="w-6 h-6 rounded-full"
                    style={{
                      backgroundColor: color,
                      border:
                        color === values.groupColor ? "2px solid #000" : "none",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <button
              className="bg-[#001F8B] hover:bg-blue-800 text-white font-bold py-1 px-8 rounded-lg "
              onClick={handleSubmit}
            >
              Create
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddCollection;
