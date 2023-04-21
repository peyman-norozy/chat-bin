const Input = (props) => {
  const { Inputtype, changeHandler } = props;
  return (
    <>
      <input type={Inputtype} onChange={changeHandler} />
    </>
  );
};

export default Input;
