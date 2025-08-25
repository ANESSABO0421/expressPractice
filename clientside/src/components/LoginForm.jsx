import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [data, setData] = useState([]);

  const sendData = async (e) => {
    e.preventDefault();
    // console.log(name, email, phoneNo);
    const response = await axios.post("http://localhost:3000/api/newUser", {
      name,
      email,
      phoneNo,
    });
    if (response) {
      window.alert("data sended successfully");
      window.location.reload()
    }
  };

  const getData = async () => {
    const getDatas = await axios.get("http://localhost:3000/api/getData");
    setData(getDatas.data);
  };
  
  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <div className="flex items-center justify-center gap-5  flex-col pt-[10vh]">
      <form
        action=""
        className="flex-col bg-gray-300 h-[500px] w-[500px] rounded-2xl flex items-center justify-center gap-5"
        onSubmit={sendData}
      >
        <h1 className="text-2xl font-bold">Login Form</h1>

        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
          value={name}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
          value={email}
        />
        <input
          type="number"
          placeholder="phoneNo"
          onChange={(e) => setPhoneNo(e.target.value)}
          className="border p-2"
          value={phoneNo}
        />
        <button
          type="submit"
          className="bg-yellow-400 h-[50px] w-[200px] rounded-2xl text-white"
        >
          Submit
        </button>
      </form>

      {data.map((d, i) => (
        <div key={i} className="flex flex-col h-[100px] w-[500px] gap-[2px]">
          <div className="flex flex-col bg-red-500 h-[700px] gap-[2px] p-5 rounded-2xl">
            <p>Name:{d.name}</p>
            <p>Email:{d.email}</p>
            <p>Phone:{d.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginForm;
