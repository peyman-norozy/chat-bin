import React, { useState } from "react";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const ClientPage = () => {
  const [clientMessage, setClientMessage] = useState<string>("");

  const clientSendHandler = (): void => {
    console.log(clientMessage);
  };

  const clientTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
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
