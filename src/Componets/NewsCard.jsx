import React from "react";
import { FaEye } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    id,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md  rounded-xl overflow-hidden">
      {/* Author Row */}
      <div className="flex bg-base-200 items-center gap-3 px-4 py-3">
        <img
          src={author.img}
          className="w-10 h-10 rounded-full object-cover"
          alt="author"
        />
        <div className="">
          <h3 className="font-semibold">{author.name}</h3>
          <p className="text-sm text-gray-500">
            {author.published_date?.slice(0, 10)}
          </p>
        </div>
        <div className="ml-auto">
          {/* three dots */}
          <button className="btn btn-ghost btn-xs">⋮</button>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4">{title}</h2>

      {/* Thumbnail */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt="thumbnail"
          className="rounded-md w-full"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-4">
        <p className="text-gray-600">
          {details.slice(0, 200)}...
          <Link to={`/news/${news.id}`} className="text-blue-600 cursor-pointer font-medium">
            Read More
          </Link>
        </p>

        {/* Rating + Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-1">
            <div className="rating rating-sm">
              <input type="radio" className="mask mask-star-2 bg-orange-400" />
            </div>
            <span className="font-semibold">{rating.number}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600">
            <FaBookmark />
            <FaEye /> {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
