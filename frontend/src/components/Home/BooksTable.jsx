import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import React from "react";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 round-md">No</th>
          <th className="border border-slate-600 round-md">Title</th>
          <th className="border border-slate-600 round-md max-md:hidden">Author</th>
          <th className="border border-slate-600 round-md max-md:hidden">Publish Year</th>
          <th className="border border-slate-600 round-md ">OPerations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key="{book._id}" className="h-8">
            <td className="border border-slate-700 round-md text-center ">{index + 1}</td>
            <td className="border border-slate-700 round-md text-center ">{book.title}</td>
            <td className="border border-slate-700 round-md text-center max-md:hidden">{book.author}</td>
            <td className="border border-slate-700 round-md text-center max-md:hidden">{book.publishYear}</td>
            <td className="border border-slate-700 round-md text-center ">
              <div className="flex-justify-center gap-x-4">
                <Link to={`/book/details/${book._id}`}>
                  <BsInfoCircle className="text-green-800 text-2xl" />
                </Link>
                <Link to={`/book/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-600 text-2xl" />
                </Link>
                <Link to={`/book/delete/${book._id}`}>
                  <AiOutlineEdit className="text-red-600 text-2xl" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
