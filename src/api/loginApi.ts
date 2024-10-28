import axios from "axios";

export async function login(UserName: string, Password: string) {
    
  return axios.post(
    "api/login",
    {
      UserName,
      Password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function getMe() {
  return axios.post("api/getme", {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
