import { useDispatch, useSelector } from "react-redux";
import { getMe, login } from "../../api/loginApi";
import { setProfile, setToken } from "../../store/loginSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RootState } from "../../app/store";
import { showErrorMessage } from "../../helpers/Alerts";

const LoginButton = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state: RootState) => state.login.login.userName);
  const password = useSelector(
    (state: RootState) => state.login.login.password
  );
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="p-3 outline-none rounded bg-parisan-color-2 text-white font-bold"
      onClick={async () => {
        try {
          const { data: loginData } = await login(userName, password);
          const token = loginData.token;
          
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          
          dispatch(setToken(token));
          
          const { data: profileData } = await getMe();
          
          dispatch(setProfile(profileData));
          navigate("/");
        } catch (error) {
          const {Message} = error.response.data;
          showErrorMessage(Message)
        }
      }}
    >
      ورود
    </button>
  );
};

export default LoginButton;
