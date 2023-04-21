const Button = (props) => {
  const { clickHandler } = props;
  return (
    <>
      <button onClick={clickHandler}>click me</button>
    </>
  );
};

export default Button;
