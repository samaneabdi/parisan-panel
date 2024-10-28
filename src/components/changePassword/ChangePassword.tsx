import { useNavigate } from "react-router-dom";
import { changePassword } from "../../api/changePasswordApi";
import { useState } from "react";
import { showErrorMessage, showSuccessMessage } from "../../helpers/Alerts";

const ChangePassword = () => {
    const [oldPassword, setOldPassword]= useState("");
    const [newPassword, setNewPassword]= useState("");
    const navigate = useNavigate();

    return(
        <div className="w-full h-80 flex flex-col items-center justify-center my-14 ">
            <form
                action=""
                className="rounded-lg px-10 py-6 flex flex-col justify-center gap-3 border bg-light-purple"
            >
                <h2 className="font-bold text-xl text-parisan-color-1 mb-2">تغییر کلمه عبور</h2>
                <div className="flex flex-wrap w-full">
                <label htmlFor="OldPassword" className="w-full text-md block mb-2 text-parisan-color-1">
                    کلمه عبور قبلی
                </label>
                <input
                    className="w-full h-11 rounded-md border border-parisan-color-1/[.20] p-3 outline-none"
                    type="password"
                    name="OldPassword"
                    id={"OldPassword"}
                    onChange={(e) => {        
                        setOldPassword(e.currentTarget.value);      
                    }}
                />
                </div>
                <div className="flex flex-wrap w-full mt-3 mb-3">
                <label htmlFor="NewPassword" className="w-full text-md block mb-2 text-parisan-color-1">
                    کلمه عبور جدید
                </label>
                <input
                    className="w-full h-11 rounded-md border border-parisan-color-1/[.20] p-3 outline-none"
                    type="password"
                    name="NewPassword"
                    id={"NewPassword"}
                    onChange={(e) => {              
                        setNewPassword(e.currentTarget.value); 
                    }}
                />
                </div>
                <button
                    type="button"
                    className="p-3 outline-none rounded bg-parisan-color-1 text-white font-bold"
                    onClick={async () => {
                        const response = await changePassword(oldPassword, newPassword);                        
                        if(response.success && !response?.success) {
                            showErrorMessage(response.message);
                        }
                        else if(response.status === 200){
                            showSuccessMessage(response.data);
                            navigate("/"); 
                        }
                    }}
                    >
                    ویرایش
                </button>
            </form>
        </div>
    )
}

export default ChangePassword;