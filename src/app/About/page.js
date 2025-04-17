"use client";

import React, { useEffect, useState } from "react";

import { getusers } from "../api/useractions";

const page = () => {
  const [data, set] = useState("");
  const fetchUsers = async () => {
    const query = "SELECT * FROM users";
    const res = await getusers(query);
    set(res);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>{data && console.log(data[0].name)}</div>;
};

export default page;
