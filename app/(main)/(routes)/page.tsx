import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-11 justify-center flex-col h-screen">
      <div className="text-3xl text-indigo-500">Discord Clone</div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
