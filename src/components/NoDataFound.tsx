const NoDataFound = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-xl font-semibold">No {title} found</p>
    </div>
  );
};

export default NoDataFound;
