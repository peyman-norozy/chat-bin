const Input = (props) => {
  const { Inputtype, changeHandler, className, placeHolder } = props;
  return (
    <>
      <input
        type={Inputtype}
        onChange={changeHandler}
        placeholder={placeHolder}
        className={className}
      />
    </>
  );
};

export default Input;
