import React from "react";
import Card from "../UI/Card";
import { getAuthUser } from "../util/auth";

const MyAccount = () => {
  const user = getAuthUser();
  return <Card title="My Account">{user.name}</Card>;
};

export default MyAccount;
