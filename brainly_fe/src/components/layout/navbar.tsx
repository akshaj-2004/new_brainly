import React from "react";
import { Button } from "../ui/button";


export const Navbar: React.FC = () => {
  return (
    <header className="flex justify-end items-center gap-4 border-b border-gray-200 bg-white px-6 py-3">
      <Button variant="secondary" size="sm" text="Share Brain" />
      <Button variant="primary" size="sm" text="Add Content"  />
    </header>
  );
};
