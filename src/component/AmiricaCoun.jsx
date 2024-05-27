import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { InputContext } from "../App";
import { IoMdArrowRoundBack } from "react-icons/io";

const AmiricaCoun = () => {
  const [countries, setCountries] = useState([]);
  const darkMode = useSelector((state) => state.mode.darkMode);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const { name } = useContext(InputContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = name
    ? countries.filter((country) =>
        country.name.common.toLowerCase().includes(name.toLowerCase())
      )
    : countries.filter((country) => country.region === "Americas");

  const handleCountryClick = (country) => {
    setSelectedCountries([country]);
    setModal(true);
  };
  console.log(selectedCountries);

  return (
    <div className="p-4">
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCountries.map((country, index) => (
          <div
            onClick={() => handleCountryClick(country)}
            key={index}
            className="w-full duration-500 hover:scale-110 rounded-xl"
          >
            <img
              className="h-40 w-full object-cover rounded-t-lg"
              src={country.flags.png}
              alt={`${country.name.common} flag`}
            />
            <div
              className={
                darkMode
                  ? "p-5 bg-white rounded-b-lg"
                  : "p-5 bg-[#303746] rounded-b-lg"
              }
            >
              <h1
                className={
                  darkMode
                    ? "font-medium pb-2 text-lg"
                    : "font-medium pb-2 text-lg text-white duration-1000"
                }
              >
                {country.name.common}
              </h1>
              <p
                className={darkMode ? "text-black" : "text-white duration-1000"}
              >
                Population: {country.population.toLocaleString()}
              </p>
              <p
                className={darkMode ? "text-black" : "text-white duration-1000"}
              >
                Region: {country.region}
              </p>
              <p
                className={darkMode ? "text-black" : "text-white duration-1000"}
              >
                Capital:{" "}
                {country.capital && country.capital.length > 0
                  ? country.capital[0]
                  : "notfound"}
              </p>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <div
          className={
            darkMode
              ? "w-full h-full bg-white fixed  z-30 overflow-y-auto top-[56px] right-[20px]  left-[-10px] pt-16"
              : "w-full h-full bg-[#272f3a] fixed top-0 z-30 overflow-y-auto left-[-10px] pt-16"
          }
        >
          {selectedCountries.map((item) => {
            return (
              <div
                key={item.name.common}
                className="p-5 max-w-[90%] gap-40  mx-auto pt-16"
              >
                <div
                  className="flex py-1 rounded-lg px-5 bg-white shadow-xl items-center w-28 gap-2 cursor-pointer"
                  onClick={() => setModal(false)}
                >
                  <IoMdArrowRoundBack className="text-black" />
                  <button className="text-black">Back</button>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 mt-10">
                  <img
                    src={item.flags.png}
                    alt=""
                    className="h-72 w-full lg:w-1/2 object-cover rounded-lg"
                  />
                  <div className="flex flex-col gap-4">
                    <h1
                      className={`font-medium text-2xl ${
                        darkMode ? "text-black" : "text-white"
                      }`}
                    >
                      {item.name.common}
                    </h1>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <h1 className={darkMode ? "text-black" : "text-white"}>
                        <span className="font-medium">Native Name:</span>{" "}
                        {item.name.common}
                      </h1>
                      <h1 className={darkMode ? "text-black" : "text-white"}>
                        <span className="font-medium">Official Name:</span>{" "}
                        {item.name.official}
                      </h1>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                      <p className={darkMode ? "text-black" : "text-white"}>
                        <span className="font-medium">Population:</span>{" "}
                        {item.population.toLocaleString()}
                      </p>
                      <p className={darkMode ? "text-black" : "text-white"}>
                        <span className="font-medium">Region:</span>{" "}
                        {item.region}
                      </p>
                    </div>
                    <p className={darkMode ? "text-black" : "text-white"}>
                      <span className="font-medium">Sub Region:</span>{" "}
                      {item.subregion}
                    </p>
                    <p className={darkMode ? "text-black" : "text-white"}>
                      <span className="font-medium">Capital:</span>{" "}
                      {item.capital && item.capital.length > 0
                        ? item.capital[0]
                        : "Not found"}
                    </p>
                    {item.borders && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        <p className={darkMode ? "text-black" : "text-white"}>
                          <span className="font-medium">Border Countries:</span>
                        </p>
                        {item.borders.map((border) => (
                          <button
                            key={border}
                            className={
                              darkMode
                                ? "border py-1 px-3 shadow-xl rounded-md"
                                : "border py-1 px-3 shadow-xl rounded-md text-white"
                            }
                          >
                            {border}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AmiricaCoun;
