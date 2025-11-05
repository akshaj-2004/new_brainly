import React, { useState } from "react";
import { MainLayout } from "../components/layout/mainLayout";
import { ContentCard } from "../components/content/contentcard";
import { AddContentModal } from "../components/content/addContentModel";

export const Dashboard: React.FC = () => {
  const [contents, setContents] = useState([
    {
      id: 1,
      title: "Future Projects",
      description: "Build a personal knowledge base, create a habit tracker...",
      tags: ["productivity", "ideas"],
      date: "10/03/2024",
      link: "https://github.com/akshajprojects",
      type: "Video" as const,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddContent = (newContent: any) => {
    setContents((prev) => [
      ...prev,
      { ...newContent, id: prev.length + 1, date: new Date().toLocaleDateString() },
    ]);
    setIsModalOpen(false);
  };

  return (
    <MainLayout>
      <div className="p-3">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contents.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              description={item.description}
              tags={item.tags}
              date={item.date}
              link={item.link}
              type={item.type}
            />
          ))}
        </div>

        {/* Modal Component */}
        <AddContentModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddContent}
        />
      </div>
    </MainLayout>
  );
};
