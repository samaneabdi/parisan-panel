import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setToken } from "../../store/loginSlice";
import Icon from "./Icon";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

const Topbar = () =>{
    const login = useSelector((state: RootState) => state.login);
    const profile = login.profile;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return(
        <div className="flex lg:flex-row flex-col w-full lg:h-24 bg-light-purple rounded-md lg:float-right lg:justify-start justify-center lg:items-center lg:p-0 p-2">
            <div className="flex flex-row justify-between">
                <div className="relative flex gap-2 justify-between group cursor-pointer">
                    <div className="flex items-center">
                        <Icon
                            height={50}
                            width={50}
                            iconUrl="/icons/Avatar.svg"
                            customeClass="flex items-center justify-center mr-3"
                        />
                        <p className="text-parisan-color-1 font-bold mr-2">
                            {profile?.NameSurname}
                        </p>
                    </div>
                    <div className="hidden group-hover:flex absolute z-[1000] shadow-lg min-w-40 h-fit top-10 right-0-0 mt-2 rounded-lg bg-white border border-dark-blue/10 p-2 flex-col items-center">
                        <div className="flex justify-center w-full font-medium text-sm">
                            <button
                                onClick={() => {
                                    navigate("/changePassword");
                                }}
                                className="transition-all w-full hover:bg-parisan-color-1/30 text-parisan-color-1 rounded-md p-2 flex items-center justify-start gap-2"
                            >
                                <Icon
                                    height={20}
                                    width={20}
                                    iconUrl="/icons/ChangePassword.svg"
                                    customeClass="-ml-2 text-parisan-color-1"
                                />
                                <p className="text-parisan-color-1 pr-1 ">
                                    تغییر کلمه عبور
                                </p>
                            </button>
                        </div>
                        <div className="flex justify-center w-full  font-medium text-sm">
                            <button
                                onClick={async () => {
                                    localStorage.removeItem("token");
                                    dispatch(setToken(null));
                                }}
                                className="transition-all w-full hover:bg-parisan-color-1/30 text-parisan-color-1 rounded-md p-2 flex items-center justify-start gap-2"
                            >
                                <Icon
                                    height={20}
                                    width={20}
                                    iconUrl="/icons/Logout.svg"
                                    customeClass="-ml-2 text-parisan-color-1"
                                />
                                <p className="text-parisan-color-1 pr-1">
                                    خروج
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-2 md:hidden block">
                    <img className="mx-auto w-16 h-16" src="/LogoPariSan.svg" alt="" />
                </div>
            </div>
            <ProfileCard />
            <div className="px-2 hidden md:block">
                <img onClick={() => navigate("/")} className="mx-auto w-20 h-20 cursor-pointer" src="/LogoPariSan.svg" alt="" />
            </div>
        </div>
    )
}

export default Topbar;
