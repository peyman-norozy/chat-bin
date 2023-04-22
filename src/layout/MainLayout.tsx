import HeaderLayout from "./HeaderLayout";

type ContainerProps = {
  children: React.ReactNode;
};

const MainLayout = (props: ContainerProps) => {
  return (
    <>
      <HeaderLayout />
      <main className="h-full">{props.children}</main>
    </>
  );
};

export default MainLayout;
