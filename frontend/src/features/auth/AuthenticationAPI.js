import { json } from "react-router-dom";

// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
export function checkUser(loginInfo) {
  const email = loginInfo.email;
  const password = loginInfo.password;
  return new Promise(async (resolve, reject) => {
    const response = await fetch("http://localhost:8000/users?email=" + email, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    // console.log("response data:", data);
    if (data.length) {
      if (password === data[0].password) {
        console.log(data);
        resolve({ data: data[0] });
      } else {
        reject({ message: "give correct password" });
      }
    } else {
      reject({ message: "user not found" });
    }

    // resolve({ data });
  });
}
