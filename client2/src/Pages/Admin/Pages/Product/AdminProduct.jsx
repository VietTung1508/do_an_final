import Datatable from "../../Components/Datatable/Datatable";
import { TiPlus } from "react-icons/ti";
import "./AdminProduct.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../../../../api/axiosClient";

function AdminProduct() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState([]);

  console.log(products);

  useEffect(() => {
    async function getProducts() {
      const res = await axiosClient.get("product/allProducts");
      setProducts(res.data);
    }

    getProducts();
  }, [update]);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Tên Sản Phẩm", flex: 2 },
    {
      field: "image",
      headerName: "Ảnh Sản Phẩm",
      flex: 2,
      renderCell: (params) => {
        return (
          <img
            style={{ width: "80%", height: "100%", objectFit: "cover" }}
            src={params.row.image.url}
            alt=""
          />
        );
      },
    },

    { field: "category", headerName: "Danh Mục", flex: 1 },
    { field: "price", headerName: "Giá", flex: 1 },
    {
      field: "size",
      headerName: "Size",
      flex: 1,
    },
    { field: "color", headerName: "Màu", flex: 1 },
  ];

  return (
    <div className="productPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Sản Phẩm</h2>
          <h3 className="desc">
            Website này có <span>{products.length} </span>sản phẩm
          </h3>
        </div>
        <button
          className="newProductBtn"
          onClick={() => {
            navigate("/admin/products/new");
          }}
        >
          Thêm Sản Phẩm
          <span className="icon">
            <TiPlus />
          </span>
        </button>
      </div>
      <Datatable
        type="product"
        update={update}
        setUpdate={setUpdate}
        hasImage={true}
        columns={columns}
        rows={products && products}
      />
    </div>
  );
}

export default AdminProduct;
