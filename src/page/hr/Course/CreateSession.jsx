import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../conponent/AppContext";
import { Link } from "react-router-dom";


export const CreateSession = () => {
  const { setPageName } = useContext(AppContext);
  useEffect(() => {
    setPageName("สร้างรอบ");
  }, [setPageName]);
  return (
    <div>
    </div>
  );
};
