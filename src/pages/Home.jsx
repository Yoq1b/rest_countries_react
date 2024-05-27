import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { InputContext } from "../App";

const Home = () => {
  const { setName } = useContext(InputContext);
  const SearchHandle = (e) => setName(e.target.value);
  const darkMode = useSelector((state) => state.mode.darkMode);

  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedRegion = event.target.value;
    navigate(`/${selectedRegion}`);
  };

  useEffect(() => {
    navigate("/africa");
  }, [navigate]);

  return (
    <div className="pt-32 max-w-[90%] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div
          className={`flex items-center gap-2 py-3 px-5 shadow-xl rounded-md w-full sm:w-[60%] md:w-[50%] lg:w-[35%] ${
            darkMode ? "bg-white" : "bg-[#303746]"
          } duration-1000`}
        >
          <IoSearch className={`w-6 h-6 ${darkMode ? "" : "text-white"}`} />
          <input
            onChange={SearchHandle}
            type="search"
            className={`w-full outline-none bg-transparent ${
              darkMode ? "" : "text-white"
            }`}
            placeholder="Search for a country ..."
          />
        </div>
        <select
          onChange={handleSelectChange}
          defaultValue="africa"
          className={`rounded-md w-full sm:w-[30%] md:w-[20%] lg:w-[14%] outline-none font-medium shadow-xl px-6 duration-1000 ${
            darkMode ? "bg-white" : "bg-[#303746] text-white"
          }`}
        >
          <option
            className={`font-medium border-none ${
              darkMode ? "" : "text-white"
            }`}
            value="africa"
          >
            Africa
          </option>
          <option
            className={`font-medium border-none ${
              darkMode ? "" : "text-white"
            }`}
            value="america"
          >
            America
          </option>
          <option
            className={`font-medium border-none ${
              darkMode ? "" : "text-white"
            }`}
            value="asia"
          >
            Asia
          </option>
          <option
            className={`font-medium border-none ${
              darkMode ? "" : "text-white"
            }`}
            value="europe"
          >
            Europe
          </option>
          <option
            className={`font-medium border-none ${
              darkMode ? "" : "text-white"
            }`}
            value="oceania"
          >
            Oceania
          </option>
        </select>
      </div>
    </div>
  );
};

export default Home;
