import Input from "../component/Input/Input";
import React, { useState } from "react";
import Button from "../component/Button/Button";

const ClientPage = () => {
  const [clientMessage, setClientMessage] = useState("");

  const clientSendHandler = () => {
    console.log(clientMessage);
  };

  const clientTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClientMessage(event.target.value);
  };

  return (
    <>
      <div className="bg-[#F9F9F9]">
        <Input Inputtype={"text"} changeHandler={clientTextHandler} />
        <Button clickHandler={clientSendHandler} />
      </div>
    </>
  );
};

export default ClientPage;
