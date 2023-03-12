import BuildingTheScientist from "./components/BuildingTheScientist";
import CongratsCard from "./components/CongratsCard";
import Home from "./components/Home";
import Statistic from "./components/Statistic";
import VideoMessage from "./components/VideoMessage";



function App() {
  return (
    <div className="App">
      <Home />
      <BuildingTheScientist />
      <VideoMessage />
      <CongratsCard />
      <Statistic />
    </div>
  );
}

export default App;
