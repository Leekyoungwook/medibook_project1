import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../constants/data";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "../../redux/slices/loginSlice";
import mediLogo from "../../assets/medi_logo.png";
import Mypage from "../category/Mypage";

const Header = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = false
  const user = useSelector((state) => state.login.user);
  // console.log(user);
  const [showMypage, setShowMypage] = useState(false);

  const handleLogout = () => {
    dispatch(clearToken());
    alert("로그아웃 되었습니다.");
  };

  const toggleMypage = (e) => {
    e.preventDefault();
    setShowMypage(!showMypage);
  };
  const openChatWindow = (e) => {
    e.preventDefault();
    const width = 390;
    const height = 600;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      "/",
      "chatWindow",
      `width=${width}, height=${height}, left=${left}, top=${top}`
    );
  };
  return (
    <div className="w-full flex justify-center shadow-custom sticky top-0 z-50 bg-white">
      <div className="container flex justify-between items-center">
        <div className="logo left-0">
          <Link to="/">
            <img src={mediLogo} alt="메디 로고" className="w-[200px]" />
          </Link>
        </div>
        <div className="head-all">
          <div className="head-top w-full text-sm info mt-2">
            <ul className="flex gap-6 items-center justify-end">
              {user !== null ? (
                <>
                  <li className="text-neutral-500 hover:text-black transition-all duration-100">
                    <button onClick={handleLogout}>로그아웃</button>
                  </li>
                </>
              ) : (
                <li className="text-neutral-500 hover:text-black transition-all duration-100">
                  <Link to="/login">로그인</Link>
                </li>
              )}
              <li className="text-neutral-500 hover:text-black transition-all duration-100">
                <Link to="/register">회원가입</Link>
              </li>
              <li className="relative">
                <Link
                  onClick={toggleMypage}
                  className="text-neutral-500 hover:text-black transition-all duration-100"
                >
                  마이페이지
                </Link>
                {showMypage && (
                  <Mypage
                    user={user}
                    onClose={() => setShowMypage(false)}
                    onLogout={handleLogout}
                  />
                )}
              </li>
            </ul>
          </div>

          <div className="head-bottom w-full text-lg py-2">
            <ul className="flex gap-6 items-center justify-end">
              {navItems.map((item, idx) => (
                <li key={idx}>
                  {item.to === "/chat" ? (
                    <Link
                      to={item.to}
                      className="hover:text-blue-600 transition-all duration-100"
                      onClick={openChatWindow}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      to={item.to}
                      className="hover:text-blue-600 transition-all duration-100"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
