import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ICities, cities } from "../Constants/cities";
import GenresList from "./GenersList";
import Modal from "../../helper components/Modal";
import SelectionBar from "./SelectionBar";

const CityCard = ({
  setSelectedCity,
  selectedCity,
}: {
  setSelectedCity: React.Dispatch<React.SetStateAction<string | ICities>>;
  selectedCity: string | ICities;
}) => {
  return (
    <div className={`flex flex-row my-4 w-full justify-between text-gray-600`}>
      {cities.map((city) => {
        return (
          <button
            className={`flex flex-col items-center justify-center p-3 ${
              city === selectedCity ? "text-green-500" : ""
            }`}
            onClick={() => setSelectedCity(city)}
          >
            <FontAwesomeIcon
              icon={city.cityIcon}
              className="mr-2 p-1"
              size="4x"
            />
            <div className="text-xl text-center my-2">{city.cityName}</div>
          </button>
        );
      })}
    </div>
  );
};

const ModalLocationContent = ({
  setSelectedCity,
  selectedCity,
}: {
  setSelectedCity: React.Dispatch<React.SetStateAction<string | ICities>>;
  selectedCity: string | ICities;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center text-2xl text-gray-700">
        Popular Cities
      </div>
      {/* Sets the height to 1 pixel. */}
      <div className="bg-gray-300 h-px w-full my-4" />
      <div className="w-full flex justify-between items-center">
        <CityCard
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
        />
      </div>
    </div>
  );
};

const TopNavBar = () => {
  const [selectedCity, setSelectedCity] = useState<string | ICities>(
    "Location"
  );
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex bg-blue-700 h-20 items-center text-white font-medium text-2xl justify-evenly gap-x-10 px-4">
        <div className="flex gap-x-4 items-center">
          <FontAwesomeIcon icon={faFilm} size="2xl" className="ml-4" />
          <div>Pick A Flick</div>
        </div>
        <div className="flex flex-1 items-center py-2">
          <input
            className="flex-1 rounded-lg py-2 px-3 text-gray-600 focus:outline-none ml-2"
            type="text"
            placeholder="Search Here..."
          />
        </div>

        <button
          className="border border-white px-3 py-2 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          {typeof selectedCity === "string"
            ? selectedCity
            : selectedCity.cityName}
        </button>
        <button className="border border-white px-3 py-2 rounded-lg">
          Sign In
        </button>
      </div>
      {/* <GenresList /> */}
      <SelectionBar />
      <Modal show={showModal} onClose={handleCloseModal}>
        <ModalLocationContent
          setSelectedCity={setSelectedCity}
          selectedCity={selectedCity}
        />
      </Modal>
    </div>
  );
};

export default TopNavBar;
