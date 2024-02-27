"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";
import { SendHorizonalIcon } from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

function Input({ collectionId }: { collectionId: string }) {
  const router = useRouter();

  const [notes, setNotes] = useState("");

  const handleSend = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/notes/create-notes`,
        {
          description: notes.trim(),
          collectionId,
        }
      );

      toast.success("Note created successfully");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setNotes("");
    }
  };

  return (
    <div className="relative">
      <div className=" bg-[#001F8B]  h-40 flex justify-center items-center p-2 ">
        <textarea
          placeholder="Enter your text here..........."
          className=" p-1 rounded-md focus:outline-none  w-full h-full"
          value={notes}
          onChange={(e) => {
            setNotes(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        disabled={!notes.trim()}
        className={cn(
          "absolute w-10 h-10 bottom-5 right-5  disabled:text-[#ABABAB] rounded-full p-2 cursor-pointer",
          !notes.trim() ? "text-[#ABABAB]" : "text-[#001F8B]"
        )}
      >
        <SendHorizonalIcon
          className="w-8 h-8"
          onClick={() => {
            handleSend();
          }}
        />
      </button>
    </div>
  );
}

export default Input;
