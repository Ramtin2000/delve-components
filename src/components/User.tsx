"use client";
import Image from "next/image";

export default function User({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="https://picsum.photos/200"
        alt="menu"
        width={32}
        height={32}
        className="rounded-full border border-[white] z-1"
      />
      <div className="w-2 h-2 bg-[#16A34A] rounded-full absolute bottom-0.5 right-0 z-[2]"></div>
    </div>
  );
}
