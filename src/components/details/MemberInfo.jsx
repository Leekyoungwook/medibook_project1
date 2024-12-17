import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchDeleteAuthData,
  fetchUpdateAuthData,
} from "../../redux/slices/authSlice";
import mediLogo from "../../assets/medi_logo.png";
import { clearToken } from "../../redux/slices/loginSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const user = useSelector((state) => state.login.user);
  console.log(user);

  // user가 null일 때 로그인 페이지로 리다이렉트
  useEffect(() => {
    if (!user) {
      navigator('/login');
      return;
    }
  }, [user, navigator]);

  const [value, setValue] = useState({
    email: "",
    password: "",
    birth_date: "",
    confirm_password: "",
  });

    // user 정보가 있을 때 value 업데이트
    useEffect(() => {
      if (user) {
        setValue(prev => ({
          ...prev,
          email: user.email
        }));
      }
    }, [user]);
  
    // user가 null이면 early return
    if (!user) {
      return null;
    }

  // const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleWithdrawal = async () => {
    if (window.confirm("정말로 탈퇴하시겠습니까?")) {
      try {
        const response = await dispatch(fetchDeleteAuthData(user.id)).unwrap();
        if (response && response.msg) {
          dispatch(clearToken());

          alert(response.msg);
          navigator("/login");
        }
      } catch (error) {
        alert(error.msg || "회원탈퇴 중 오류가 발생했습니다.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 쿼리가 잡히지 않게(경로 표시X)

    if (
      value.password === "" ||
      value.confirm_password === "" ||
      value.birth_date === ""
    ) {
      alert("비밀번호와 생년월일은 필수 입력값입니다.");
      return;
    }
    if (value.password !== value.confirm_password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const data = {
      email: value.email,
      password: value.password,
      birth_date: value.birth_date,
      id: user.id,
    };

    try {
      const response = await dispatch(fetchUpdateAuthData(data)).unwrap();
      if (response && response.msg) {
        // response.msg 확인
        alert(response.msg);
        dispatch(clearToken());
        navigator("/login");
      } else {
        alert("회원정보 수정에 실패했습니다.");
      }
    } catch (error) {
      alert(error.msg || "회원정보 수정 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto w-full mb-16">
      <div className="logo w-[350px] mt-32 mb-12">
        <img src={mediLogo} alt="" />
      </div>
      <div className="shadow-lg px-12 py-10 w-[500px] border mb-16 rounded-lg">
        <h2 className="text-3xl font-extrabold mb-6 text-center">
          회원정보 수정
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label
              htmlFor="email"
              className="block text-neutral-700 text-lg mb-1"
            >
              이메일
            </label>
            <input
              type="email"
              value={user.email}
              className="w-full px-3 py-2 border mb-2 rounded-md text-gray-400"
              disabled
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="password"
              className="block text-neutral-700 text-lg mb-1"
            >
              비밀번호 변경
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="mb-1">
            <label
              htmlFor="confirmPassword"
              className="block text-neutral-700 text-lg mb-1"
            >
              비밀번호 변경 확인
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md"
              name="confirm_password"
              onChange={handleChange}
            />
          </div>
          <div className="mb-1">
            <label
              htmlFor="birth_date"
              className="block text-neutral-700 text-lg mb-1"
            >
              생년월일 수정
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border"
              name="birth_date"
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between items-center gap-2 my-6">
            <button
              className="w-full h-12 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:text-white transition-all duration-200"
              type="submit"
            >
              수정하기
            </button>

            <button
              className="w-full h-12 border border-neutral-700 rounded-md hover:text-blue-600 hover:border-blue-600 transition-all duration-200"
              type="button"
              onClick={handleWithdrawal}
            >
              회원탈퇴
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
