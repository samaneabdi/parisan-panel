import { setLogin } from "../../store/loginSlice";
// import Text from "../common/TextField";
import { useDispatch } from "react-redux";
import LoginButton from "./LoginButton";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center parent">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      <form
        action=""
        className="relative z-10 rounded-lg p-10 flex flex-col justify-center gap-3 border bg-white"
      >
        <h2 className="flex flex-col items-center  justify-center text-xl font-bold">
          <img className="mx-auto w-36 h-36" src="/LogoPariSan.jpg" alt="" />
        </h2>
        <div className="flex flex-wrap w-full">
          <label htmlFor="UserName" className="w-full text-md block mb-2 text-parisan-color-1">
            تلفن همراه
          </label>
          <input
            className="w-full h-11 rounded-md border border-parisan-color-1/[.20] p-3 outline-none"
            type="userName"
            name="UserName"
            id={"UserName"}
            onChange={(e) => {              
              dispatch(setLogin({ ["userName"]: e.currentTarget.value }));
            }}
          />
        </div>
        <div className="flex flex-wrap w-full mt-3 mb-3">
          <label htmlFor="Password" className="w-full text-md block mb-2 text-parisan-color-1">
            کلمه عبور
          </label>
          <input
            className="w-full h-11 rounded-md border border-parisan-color-1/[.20] p-3 outline-none"
            type="password"
            name="Password"
            id={"Password"}
            onChange={(e) => {              
              dispatch(setLogin({ ["password"]: e.currentTarget.value }));
            }}
          />
        </div>
        <LoginButton />
      </form>
    </div>
  );
}
