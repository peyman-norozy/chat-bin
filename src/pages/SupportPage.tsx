import React, { useState } from "react";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";

const SupportPage = () => {
  const [supportMessage, setSupportMessage] = useState<string>("");

  const supportSendHandler = (): void => {
    console.log(supportMessage);
  };

  const supportTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSupportMessage(event.target.value);
  };

  return (
    <>
      <div className="bg-[#F9F9F9]">
        <Input Inputtype={"text"} changeHandler={supportTextHandler} />
        <Button clickHandler={supportSendHandler} />
      </div>
    </>
  );
};

export default SupportPage;
