import HeaderLayout from "./HeaderLayout";

type ContainerProps = {
  children: React.ReactNode;
};

const MainLayout = (props: ContainerProps) => {
  return (
    <>
      <HeaderLayout />
      <main>{props.children}</main>
    </>
  );
};

export default MainLayout;
