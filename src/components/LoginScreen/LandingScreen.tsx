import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="bg-blue-700 w-4/6 flex justify-center items-center text-white text-5xl gap-x-5">
        <FontAwesomeIcon icon={faFilm} size="2xl" />
        <div className="font-medium">Pick A Flick</div>
      </div>
      <div className="bg-white w-2/6 flex justify-center items-center">
        <button
          className="text-blue-700 text-5xl p-5 border-2 border-blue-700 rounded-lg hover:text-white hover:bg-blue-700"
          onClick={() => navigate("/explore")}
        >
          Let's Go !
        </button>
      </div>
    </div>
  );
};

export default LandingScreen;
