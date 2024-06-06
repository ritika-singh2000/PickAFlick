import NowPlayingList from "./NowPlayingList";
import PopularList from "./PopularList";
import NowPlayingFullList from "./NowPlayingFullList";

const HomePage = () => {
  return (
    <div>
      <NowPlayingList />
      <PopularList />
      <NowPlayingFullList />
    </div>
  );
};

export default HomePage;
