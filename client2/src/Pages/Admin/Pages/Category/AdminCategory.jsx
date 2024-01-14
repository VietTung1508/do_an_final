import React, { useEffect, useState } from "react";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminCategory.scss";
import { TiPlus } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../../../api/axiosClient";

const AdminCategory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await axiosClient.get("category/categories");
      setCategories(res.data);
    }

    getCategories();
  }, [update]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Tiêu Đề Danh Mục", flex: 1 },
    { field: "tag", headerName: "Tag Danh Mục", flex: 1 },
  ];

  return (
    <div className="categoryPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Danh Mục</h2>
          <h3 className="desc">
            Website này có <span>{categories.length} </span>danh mục
          </h3>
        </div>
        <button
          className="newCategoryBtn"
          onClick={() => {
            navigate("/admin/categories/new");
          }}
        >
          Thêm Danh Mục
          <span className="icon">
            <TiPlus />
          </span>
        </button>
      </div>
      <Datatable
        update={update}
        setUpdate={setUpdate}
        type="category"
        columns={columns}
        rows={categories}
      />
    </div>
  );
};

export default AdminCategory;
