import React from 'react';
import { Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'
import Product from "../Pages/ProductDetails/Product.jsx";
import Home from "../Pages/Home/Home.jsx";
import Products from "../Pages/Products/Products.jsx";
import Dashboard from "../Pages/Admin/Pages/Dashboard/Dashboard.jsx";
import Admin from "../Pages/Admin/Admin.jsx";
import AdminAuth from "../Pages/Admin/Pages/AdminAuth/AdminAuth.jsx";
import AdminProduct from "../Pages/Admin/Pages/Product/AdminProduct.jsx";
import AdminOrder from "../Pages/Admin/Pages/Order/AdminOrder.jsx";
import AdminUser from "../Pages/Admin/Pages/User/AdminUser.jsx";
import AdminCoupon from "../Pages/Admin/Pages/Coupon/AdminCoupon.jsx";
import AdminCategory from "../Pages/Admin/Pages/Category/AdminCategory.jsx";
import AdminProfile from "../Pages/Admin/Pages/AdminProfile/AdminProfile.jsx";
import NewProduct from "../Pages/Admin/Pages/NewProduct/NewProduct.jsx";
import NewCategory from "../Pages/Admin/Pages/NewCategory/NewCategory.jsx";
import NewCoupon from "../Pages/Admin/Pages/NewCoupon/NewCoupon.jsx";
import Auth from "../Pages/Auth/Auth.jsx";
import Payment from "../Pages/Payment/Payment.jsx";
import Cart from "../Pages/Cart/Cart.jsx";
import Account from "../Pages/Account/Account.jsx";

const AnimatedRoute = () => {
    const location = useLocation()
    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>

                <Route path={"/"} element={<Home />}/>
                <Route path={"products"} element={<Products />}/>

                <Route path={"product/:id"} element={ <Product /> }/>

                <Route path={"auth"} element={<Auth />}/>
                <Route path={"account"} element={<Account/>}/>
                <Route path={"account/:setting"} element={<Account/>}/>

                <Route path={"payment"} element={<Payment />}/>
                <Route path={"cart"} element={<Cart/>}/>

                <Route path={"admin"} element= {
                        <Admin>
                            <Dashboard />
                        </Admin>
                }/>
                <Route path={"admin/auth"} element= {
                    <Admin>
                        <AdminAuth />
                    </Admin>
                }/>

                <Route path={"admin/products"} element={
                    <Admin>
                        <AdminProduct />
                    </Admin>
                }/>
                <Route path={"admin/orders"} element={
                    <Admin>
                        <AdminOrder />
                    </Admin>
                }/>
                <Route path={"admin/users"} element={
                    <Admin>
                        <AdminUser />
                    </Admin>
                }/>
                <Route path={"admin/coupons"} element={
                    <Admin>{<AdminCoupon />}</Admin>
                }/>
                <Route path={"admin/categories"} element={
                    <Admin>{<AdminCategory />}</Admin>
                }/>

                <Route path={"admin/profile"} element={
                    <Admin>
                        <AdminProfile />
                    </Admin>
                }/>
                <Route path={"admin/products/new"} element={
                    <Admin>
                        <NewProduct />
                    </Admin>
                }/>
                <Route path={"admin/categories/new"} element={
                    <Admin>
                        <NewCategory />
                    </Admin>
                }/>
                <Route path={"admin/coupons/new"} element={
                    <Admin>
                        <NewCoupon />
                    </Admin>
                }/>

            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoute;
