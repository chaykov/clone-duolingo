import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/pl.svg"
            alt="Poland"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Polish
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/pk.svg"
            alt="Pakistan"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Punjab
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/jp.svg"
            alt="Japan"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Japanese
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/fr.svg"
            alt="France"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          French
        </Button>

        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/gb.svg"
            alt="United Kingdom"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          English (UK)
        </Button>
      </div>
    </footer>
  );
};
