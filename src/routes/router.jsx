import React, { useEffect, lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import routesUrl from "./routes-url";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie"

import Spinner from "../components/spinner";

const PrivateRoute = (props) => {
  const navigate = useNavigate();

  if(!Cookies.get("js_user_data")){
    navigate(routesUrl.login)
  }
  return props.children;
};

const SunspenseWrap = ({ children }) => {
    return <Suspense fallback={<Spinner />}>{children}</Suspense>
};

const LoginPage = lazy(() => import("../pages/auth/login"));
const RegistrationPage = lazy(() => import("../pages/auth/registration"));


const HomePage = lazy(() =>  import("../pages/home"));
const AboutPage = lazy(() => import("../pages/about"));
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
            <>
              <Outlet />
            </>
          }
        >
          <Route
            index
            element={<SunspenseWrap><HomePage /></SunspenseWrap>}
          />
          <Route
            path={"login"}
            element={<SunspenseWrap><LoginPage /></SunspenseWrap>}
          />
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
          <Route
            path={"registration"}
            element={
              <SunspenseWrap>
                <RegistrationPage />
              </SunspenseWrap>
            }
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
                <SunspenseWrap>
                  <CheckoutPage />
                </SunspenseWrap>
              }
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
      </Routes>
    </>
  );
};

export default RouterComponent;
