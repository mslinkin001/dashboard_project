import React, { useState } from "react";
import Wrapper from "./components/Wrapper";
import Logo from "./components/sidebar-right/Logo";
import Menu from "./components/sidebar-right/Menu";
import SidebarWrapper from "./components/sidebar-right/SidebarWrapper";
import MiddleWrapper from "./components/main-middle/MiddleWrapper";
import MainTitle from "./components/main-middle/MainTitle";
import MainDate from "./components/main-middle/MainDate";
import Insights from "./components/main-middle/Insights";
import RecentOrders from "./components/main-middle/RecentOrders";
import LeftWrapper from "./components/section-left/LeftWrapper";
import LeftTopSection from "./components/section-left/LeftTopSection";
import RecentSection from "./components/section-left/RecentSection";
import SaleAnalytic from "./components/section-left/SaleAnalytic";
import Login from "./components/login/Login";
import { useAxios } from "./components/custom-hook/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "./store/index";

function App() {
  const dispatch = useDispatch(loginActions);
  const isLoggedin = useSelector((state) => state.loginReducer.isLoggedin);
  const fetchUrl = useSelector((state) => state.loginReducer.fetchUrl);
  const fetchMethod = useSelector((state) => state.loginReducer.fetchMethod);
  const loginposition = useSelector(
    (state) => state.loginReducer.loggedinPosition
  );

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [fetchParams, setFetchParams] = useState({
  //   fetchUrl: "",
  //   fetchMethode: "",
  // });
  console.log(fetchUrl);
  const { response, loading, error } = useAxios({
    method: fetchMethod,
    url: fetchUrl,
    headers: {
      "X-Parse-Application-Id": "aKMa1c8X90GamXful5ecFAl1qbyM2gjXLLamVEr5",
      "X-Parse-REST-API-Key": "Vpu1GAUIZomXVeMKBm9sLZn6PlG4i5lSyFVqeBMF",
    },
  });
  const loginHandler = (
    fetchUrlparam,
    fetchMethodparam,
    loggedinPositionparam
  ) => {
    dispatch(
      loginActions.login({
        fetchUrlparam,
        fetchMethodparam,
        loggedinPositionparam,
      })
    );
  };
  if (response) {
    console.log(response.results);

    console.log(loginposition);
  }
  if (isLoggedin) {
    return (
      <>
        <Wrapper>
          <SidebarWrapper>
            <Logo />
            <Menu />
          </SidebarWrapper>
          <MiddleWrapper>
            <MainTitle
              mainTitle={
                response
                  ? response.results[0].firstName +
                    " " +
                    response.results[0].lastName
                  : ""
              }
            />
            <MainDate />
            <Insights />
            <RecentOrders />
          </MiddleWrapper>
          <LeftWrapper>
            <LeftTopSection />
            <RecentSection />
            <SaleAnalytic />
          </LeftWrapper>
        </Wrapper>
      </>
    );
  } else {
    return <Login loginHandler={loginHandler} />;
  }
}

export default App;
