export const Navigation = () => {
  return (
    <div className="grid grid-cols-[repeat(3,_1fr)] justify-between items-center py-8 px-12 z-50 fixed top-0 left-0 w-full">
      <img src="/assets/logo.png" alt="Logo" height="44px" />
      <div className="uppercase text-white flex gap-2 text-sm justify-center">
        <span className="text-gray-500">
          Dolce Mall & Signature REsidency /
        </span>
        <span>Videos</span>
      </div>
      <button className="cursor-pointer flex justify-end">
        <img src="/assets/x.svg" alt="X" />
      </button>
    </div>
  );
};
