import { CardsSections } from "../components/CardsSections";
import { Header } from "../components/Header";

const Home = () => {
  return (
    <div className="h-screen bg-[url('https://www.xtrafondos.com/wallpapers/paisaje-de-rick-y-morty-9415.jpg')] bg-cover">
      <Header />
      <div className="flex justify-evenly mt-52">
        <CardsSections
          img={
            "https://i.pinimg.com/564x/33/7c/57/337c57952229e6fa51974fe5eeec0402.jpg"
          }
          text={"characters"}
        />
      </div>
    </div>
  );
};

export default Home;
