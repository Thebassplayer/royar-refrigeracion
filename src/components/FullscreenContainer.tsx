type FullscreenContainerProps = {
  children: React.ReactNode;
};

const FullscreenContainer = ({
  children,
}: FullscreenContainerProps): JSX.Element => {
  return (
    <div className="flex h-[100vh] flex-col sm:h-[100svh]">{children}</div>
  );
};

export default FullscreenContainer;
