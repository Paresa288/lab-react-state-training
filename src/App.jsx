import Carousel from "./components/Carousel";
import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton initialText={0}/>
      <DiscoButton />
      <Counter />
      <div className="d-flex gap-4 justify-content-around">
      <ClickablePicture />
      <Dice />
      <Carousel 
        images={[
          "https://randomuser.me/api/portraits/women/1.jpg",
          "https://randomuser.me/api/portraits/men/1.jpg",
          "https://randomuser.me/api/portraits/women/2.jpg",
          "https://randomuser.me/api/portraits/men/2.jpg"
        ]}
      />
      </div>
    </div>
  );
}

export default App;
