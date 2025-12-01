import { FaBrain } from "react-icons/fa";
export const Navication = () => {
  return (
    <div className="flex">
      <a
        href="#"
        className=" [-webkit-box-reflect:below_5px_linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0.4))] rounded-full box-border bg-white w-[100px] h-[100px] flex justify-center items-center text-decoration-line-none duration-500 text-2xl hover:bg-blue-500  "
      >
        <FaBrain />
      </a>
      <h1 className="text-xl font-extrabold p-10 ">AI TOOLS </h1>
    </div>
  );
};
