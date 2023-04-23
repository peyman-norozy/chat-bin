import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { supportTextMessage } from "../store/MessageSlice";
import Input from "../component/Input/Input";
import Button from "../component/Button/Button";
import ChatTextSection from "../component/ChatTextSection";
import style from "../component/ChatTextSection.module.css";

const SupportPage = () => {
  const [supportMessage, setSupportMessage] = useState<string>("");

  const dispatch = useDispatch();

  const supportSendHandler = (): void => {
    console.log(supportMessage);
    dispatch(supportTextMessage(supportMessage));
  };

  const supportTextHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSupportMessage(event.target.value);
  };

  return (
    <>
      <ChatTextSection />
      <div className="flex justify-center items-center gap-2 fixed bottom-0 w-full bg-[#eee] py-[20px] rounded-tl-full rounded-tr-full">
        <Button
          clickHandler={supportSendHandler}
          className={
            "bg-[#2BC48A] rounded-full w-[50px] h-[50px] flex justify-center items-center hover:bg-[#006941] hover:transition hover:ease-out hover:duration-1000"
          }
        />
        <Input
          Inputtype={"text"}
          changeHandler={supportTextHandler}
          placeHolder={"پیام خود را بنویسید..."}
          className={"outline-none border rounded-xl w-[90%] pr-2 py-[10px]"}
        />
      </div>
    </>
  );
};

export default SupportPage;
