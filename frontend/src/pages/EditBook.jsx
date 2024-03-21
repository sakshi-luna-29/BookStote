import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/book/${id}`)
      .then((response) => {
        setBook(response.data.data);
        console.log(response.data.data);
        setTitle(response.data.data.title);
        setAuthor(response.data.data.author);
        setPublishYear(response.data.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`http://localhost:5555/api/book/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
        alert("Data Updated successfully.");
      })
      .catch((error) => {
        setLoading(false);
        alert("An Error Happened . Please Try Again Later.");
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <div className="text-3xl my-4">Edit Book</div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2  border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} className="border-2 border-gray-500 px-4 py-2 w-full" />
          </div>
          <button className="p-2 bg-sky-300 m-8s" onClick={handleEditBook}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
