import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../AuthenticationSlice";
import { Navigate } from "react-router-dom";

const Protected = (childComponent) => {
  const user = useSelector(selectUser);
  //   console.log("user:", user);
  if (!user) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  // console.log("component", childComponent.children);
  return childComponent.children;
};

export default Protected;
