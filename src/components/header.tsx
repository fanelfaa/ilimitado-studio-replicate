export const Header = () => {
  return (
    <header
      className="py-11 fixed top-0 inset-x-0 z-50"
      style={{ mixBlendMode: "difference" }}
    >
      <div className="px-11 h-[120px] flex justify-between items-center">
        <a className="font-sinisuka text-[48px]">Ilimitado Studio</a>
        <button className="size-9 overflow-hidden">
          <div className="h-full w-full relative">
            <div className="w-full h-[2px] bg-foreground translate-y-[-6px] absolute inset-0 my-auto" />
            <div className="w-full h-[2px] bg-foreground translate-y-[6px] absolute inset-0 my-auto" />
          </div>
        </button>
      </div>
    </header>
  );
};
