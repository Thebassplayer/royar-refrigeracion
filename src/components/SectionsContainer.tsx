type SectionsContainerProps = {
  children: React.ReactNode;
};

const SectionsContainer = ({
  children,
}: SectionsContainerProps): JSX.Element => {
  return (
    <div className="m-2 flex h-max grow flex-col justify-between rounded-lg bg-gray-800 p-4 shadow-lg lg:m-6">
      {children}
    </div>
  );
};

export default SectionsContainer;
