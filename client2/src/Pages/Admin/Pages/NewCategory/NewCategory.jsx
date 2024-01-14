import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./NewCategory.scss";
import axiosClient from "../../../../api/axiosClient";

const NewCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  const navigate = useNavigate();

  const handleReset = () => {
    setTitle("");
  };

  const handleNewCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axiosClient.post("category/create", {
        title: title,
        tag: tag,
      });
      navigate("/admin/categories");
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };
  return (
    <div className="newCategory">
      <div className="header">
        <Link to="/admin/categories" className="icon">
          <FaArrowLeftLong />
        </Link>
        <div className="info">
          <h3>Trở lại danh sách</h3>
          <h1>Thêm Danh Mục</h1>
        </div>
      </div>
      <div className="newCategoryContainer">
        <div className="generalInfo">
          <h1 className="title">Thông Tin Chung</h1>
          <form className="categoryForm" onSubmit={handleNewCategory}>
            <div className="inpWrapper">
              <label>Tên Danh Mục</label>
              <input
                required
                name="title"
                type="text"
                disabled={isLoading}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Điền Tên Danh Mục"
              />
            </div>
            <div className="inpWrapper">
              <label>Tag Danh Mục</label>
              <input
                required
                name="tag"
                type="text"
                disabled={isLoading}
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                placeholder="Điền Tag Danh Mục"
              />
            </div>
            <div className="form-action">
              <button type="button" className="btnReset" onClick={handleReset}>
                Đặt Lại
              </button>
              <button className="btnUpload">Thêm Danh Mục</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
