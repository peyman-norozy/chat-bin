import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clientTextMessage } from "../store/MessageSlice";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";
import ChatTextSection from "../component/ChatTextSection";

const ClientPage = () => {
  const [clientMessage, setClientMessage] = useState<string>("");

  const dispatch = useDispatch();

  const clientSendHandler = (): void => {
    console.log(clientMessage);
    dispatch(clientTextMessage(clientMessage));
  };

  const clientTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setClientMessage(event.target.value);
  };

  return (
    <>
      <ChatTextSection />
      <div className="flex justify-center items-center gap-2 absolute bottom-[4px] w-full">
        <Button
          clickHandler={clientSendHandler}
          className={
            "bg-[#2BC48A] rounded-full w-[50px] h-[50px] flex justify-center items-center"
          }
        />
        <Input
          Inputtype={"text"}
          changeHandler={clientTextHandler}
          placeHolder={"پیام خود را بنویسید..."}
          className={"outline-none border rounded-xl w-[90%] pr-2 py-2"}
        />
      </div>
    </>
  );
};

export default ClientPage;
