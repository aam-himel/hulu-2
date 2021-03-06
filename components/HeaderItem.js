const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col group items-center w-12 sm:w-20 cursor-pointer">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className=" opacity-0 group-hover:opacity-100 tracking-widest ">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
