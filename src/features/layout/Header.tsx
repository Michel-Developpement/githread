import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import React from "react";

export const Header = async () => {
  return (
    <header className="border-b border-b-accent">
      <div className="container flex items-center py-2 max-w-lg m-auto gap-1">
        <h1 className="text-2xl mr-auto font-bold">Githread</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
