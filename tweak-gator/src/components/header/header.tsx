const Header = () => {
  return (
    <header className="relative h-[330px]">
      <div className="container mx-auto px-6 text-center  space-y-2 sm:space-y-3 z-10 relative pt-10">
        <img
          className="mx-auto hover:-translate-y-4 transition cursor-pointer"
          src="../images//header-img/tweakgatormainlogo.png"
          alt="main-logo"
        />
        <h1 className="text-white font-extrabold text-3xl sm:text-5xl tracking-tight text-center dark:text-white">
          TweakGator
        </h1>
        <p className="text-xl text-white">
          The most popular App-store for most popular spoofers,which are
          included Top Free Paid Applications
        </p>
      </div>
      <div className="bg-[#8429ff] w-full h-[330px] absolute top-0"></div>
    </header>
  );
};

export default Header;
