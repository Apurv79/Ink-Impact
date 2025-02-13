import React from "react";
import appwriteServices from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="w-full md:w-1/3 p-4">
      <div className="bg-[#defcf9] rounded-xl overflow-hidden shadow">
        <div className="h-48 overflow-hidden">
          <img
            src={
              featuredImage
                ? appwriteServices.getFilePreview(featuredImage)
                : "/default-image.jpg"
            }
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold text-[#c3bef0]">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
