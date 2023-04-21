const Button = (props) => {
  const { clickHandler, className } = props;
  return (
    <>
      <button onClick={clickHandler} className={className}>
        <img src="./send.png" alt="" className="w-[60%]" />
      </button>
    </>
  );
};

export default Button;
