import axios from "axios";

export async function changePassword(OldPassword: string, NewPassword: string) {
    try {
        return await axios.post(
            "api/changepassword",
            {
                OldPassword,
                NewPassword,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    } catch (error) {
        console.log('error',error);
        
        if (axios.isAxiosError(error) && error.response) {
            return { success: false, message: error.response.data.Message };
        }
        return { success: false, message: "خطا رخ داده است" };
    }
  }