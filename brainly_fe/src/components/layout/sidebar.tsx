import React from "react";
import { Music, Video, Image, FileText } from "lucide-react";
import { Logo } from "../logo";
import { NavItem } from "./navItem";

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen border-r border-gray-200 bg-white flex flex-col p-4">
      <Logo />

      <nav className="mt-8 flex flex-col gap-2">
        <NavItem icon={<Music size={18} />} label="Audio" />
        <NavItem icon={<Video size={18} />} label="Video" />
        <NavItem icon={<Image size={18} />} label="Image" />
        <NavItem icon={<FileText size={18} />} label="Article" />
      </nav>
    </aside>
  );
};
