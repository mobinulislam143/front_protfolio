const ServiceSkeleton = () => {
  return (
    <>
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="w-1/2 border-r  pl-2 pb-6 animate-pulse">
          <div className="rounded-full w-20 h-20 bg-bg_secondary p-6 flex justify-center items-center">
            <div className="w-full h-full bg-gray-300 rounded-full"></div>
          </div>
          <h2 className="text-lg font-semibold text-gray-400 py-3 bg-gray-300 rounded w-3/4 h-6"></h2>
          <p className="text-gray-400 text-[17px] bg-gray-300 rounded w-full h-4 my-2"></p>
          <p className="text-gray-400 text-[17px] bg-gray-300 rounded w-5/6 h-4"></p>
        </div>
      ))}

    </>
  );
};

export default ServiceSkeleton;
