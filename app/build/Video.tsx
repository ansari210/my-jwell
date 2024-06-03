import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

const Video: React.FC = () => {
  const [uploadedVideos, setUploadedVideos] = useState<string[]>([]);

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedVideos([URL.createObjectURL(file)]);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <div className="flex justify-center">
          {uploadedVideos.map((video, index) => (
            <video key={index} controls className="w-64 h-48 mb-4">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
          {uploadedVideos.length === 0 && <MdAdd size={30} color="gray" />}
        </div>
        {uploadedVideos.length === 0 && (
          <>
            <p className="py-2 text-gray-800">Upload Videos</p>
            <p className="py-2 text-gray-800">
              Choose videos you want for your content
            </p>
            <input
              type="file"
              accept="video/mp4"
              onChange={handleVideoUpload}
              className="hidden"
              id="videoUpload"
            />
            <label
              htmlFor="videoUpload"
              className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[200px]"
            >
              Add Video
            </label>
            <p className="py-2 text-gray-800">
              You can also add free stock videos
            </p>
            <button className="bg-gray-800 hover:bg-gray-700 text-gray-800 font-bold py-2 px-4 rounded w-[200px]">
              Add Stock Video
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Video;
