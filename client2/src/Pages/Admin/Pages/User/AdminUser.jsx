import { TiPlus } from "react-icons/ti";
import Datatable from "../../Components/Datatable/Datatable";
import "./AdminUser.scss";
import { useEffect, useState } from "react";
import axiosClient from "../../../../api/axiosClient";

function AdminUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await axiosClient.get("auth/users");
      setUsers(res.data);
    }

    getUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "username", headerName: "Tên Người Dùng", flex: 2 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "phone", headerName: "Số Điện Thoại", flex: 1 },
  ];

  return (
    <div className="userPage">
      <div className="action">
        <div className="header">
          <h2 className="title">Tài Khoản</h2>
          <h3 className="desc">
            Website này có <span>{users.length} </span>tài khoản
          </h3>
        </div>
      </div>
      <Datatable noAction columns={columns} rows={users} />
    </div>
  );
}

export default AdminUser;
