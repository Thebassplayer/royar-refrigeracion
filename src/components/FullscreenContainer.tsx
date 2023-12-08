type FullscreenContainerProps = {
  children: React.ReactNode;
};

const FullscreenContainer = ({
  children,
}: FullscreenContainerProps): JSX.Element => {
  return <div className="flex h-screen flex-col">{children}</div>;
};

export default FullscreenContainer;
