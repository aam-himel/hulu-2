import { useRouter } from "next/router";
import searchItem from "../utils/searchItem";

const NavBar = (props) => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20  whitespace-nowrap overflow-x-scroll text-2xl space-x-10 sm:space-x-20 scrollbar-hide">
        {Object.entries(searchItem).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="cursor-pointer transition  duration-100 transform hover:scale-125  active:text-red-400 last:pr-24"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};
export default NavBar;
