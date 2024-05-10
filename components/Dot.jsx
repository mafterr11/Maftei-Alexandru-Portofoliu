export const Dot = () => {
  return (
    <div className="relative text-[65px] text-accent">
      &#x2022;{" "}
      <span className=" absolute right-0 top-[9px] h-4 w-4 rounded-full border-2 border-black-heavy/50"></span>
    </div>
  );
};
