import React, { useEffect, lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import routesUrl from "./routes-url";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

import Spinner from "../components/spinner";
import NormalLayout from "../layout/normal";
import AuthLayout from "../layout/auth";

const PrivateRoute = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!Cookies.get("js_user_token")){
      navigate(routesUrl.login)
    }
  },[Cookies.get("js_user_token")])
  
  return <>{props.children}</>;
};

const SunspenseWrap = ({ children }) => {
    return <Suspense fallback={<Spinner />}>{children}</Suspense>
};

const LoginPage = lazy(() => import("../pages/auth/login"));
const RegistrationPage = lazy(() => import("../pages/auth/registration"));


const HomePage = lazy(() =>  import("../pages/home"));
const AboutPage = lazy(() => import("../pages/about"));
const ProductPage = lazy(() => import("../pages/product"));
const SingleProductPage = lazy(() => import("../pages/product/single-product"));
const ContactUsPage = lazy(() => import("../pages/contact-us"));
const CartPage = lazy(() => import("../pages/cart"));
const CheckoutPage = lazy(() => import("../pages/checkout"));
const ThankyouPage = lazy(() => import("../pages/checkout/thank-you"));
const ProfilePage = lazy(() => import("../pages/profile"));

const RouterComponent = (props) => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <NormalLayout>
              <Outlet />
            </NormalLayout>
          }
        >
          <Route
            index
            element={<SunspenseWrap><HomePage /></SunspenseWrap>}
          />
          <Route
            path={"products"}
            element={
                <Outlet />
            }
          >
            <Route
              index
              element={<SunspenseWrap><ProductPage /></SunspenseWrap>}
            />
            <Route path={":id"} element={<SunspenseWrap ><SingleProductPage /></SunspenseWrap>}/>
          </Route>
          <Route
            path={"about"}
            element={<SunspenseWrap><AboutPage /></SunspenseWrap>}
          />
          <Route
            path={"contact-us"}
            element={<SunspenseWrap><ContactUsPage /></SunspenseWrap>}
          />
          <Route
            path={"login"}
            element={
              <SunspenseWrap><LoginPage /></SunspenseWrap>}
          />
          <Route path={"cart"} element={<PrivateRoute ><Outlet /></PrivateRoute>}>
            <Route
              index
              element={
                <SunspenseWrap>
                  <CartPage />
                </SunspenseWrap>
              }
            />
          </Route>
          <Route path={"checkout"} element={<PrivateRoute ><Outlet /></PrivateRoute>}>
         
            <Route
              index
              element={
                <SunspenseWrap><CheckoutPage /></SunspenseWrap>}
            />
            <Route
              path={"thank-you"}
              element={
                <SunspenseWrap><ThankyouPage /></SunspenseWrap>}
            />
          </Route>
          <Route path={"profile"} element={<PrivateRoute ><Outlet /></PrivateRoute>}>
            <Route
              index
              element={
                <SunspenseWrap>
                  <ProfilePage />
                </SunspenseWrap>
              }
            />
          </Route>
        </Route>
        <Route
          path="/auth/"
          element={
            <AuthLayout>
              <Outlet />
            </AuthLayout>
          }
        >
          <Route
            path={"login"}
            element={<SunspenseWrap><LoginPage /></SunspenseWrap>}
          />
          <Route
            path={"registration"}
            element={
              <SunspenseWrap>
                <RegistrationPage />
              </SunspenseWrap>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default RouterComponent;
