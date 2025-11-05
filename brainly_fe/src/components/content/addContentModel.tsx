import React, { useState } from "react";
import { Modal } from "../ui/modal";
import { Button } from "../ui/button";

const contentTypes = ["Audio", "Video", "Image", "Article"];

interface AddContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    url: string;
    type: string;
    title: string;
    tags: string[];
  }) => void;
}

export const AddContentModal: React.FC<AddContentModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    if (tagInput && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ url, type, title, tags });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Content">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* URL */}
        <div>
          <label className="text-sm font-medium text-gray-700">URL</label>
          <input
            type="url"
            placeholder="Enter content URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        {/* Type */}
        <div>
          <label className="text-sm font-medium text-gray-700">Content Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          >
            <option value="">Select Content Type</option>
            {contentTypes.map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter content title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />
        </div>

        {/* Tags */}
        <div>
          <label className="text-sm font-medium text-gray-700">Tags</label>
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              placeholder="Add a tag"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <Button type="button" onClick={handleAddTag}>
              Add
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Modal>
  );
};
