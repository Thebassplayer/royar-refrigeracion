type MainSectionContainerProps = {
  children: React.ReactNode;
};

const MainSectionContainer = ({
  children,
}: MainSectionContainerProps): JSX.Element => {
  return <div className="flex flex-col">{children}</div>;
};

export default MainSectionContainer;
