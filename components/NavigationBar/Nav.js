import Link from "next/link";
export const Nav = () => {
  return (
    <div>
      <ul className="flex gap-5 justify-center items-center bg-gradient-to-b from-orange-500 to-orange-700 py-5 text-white">
        <li>
          <a href="">Logo</a>
        </li>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <input
            type="Search"
            placeholder="Search something.."
            className="py-2 px-10 rounded-md"
          />
        </li>
      </ul>
    </div>
  );
};
