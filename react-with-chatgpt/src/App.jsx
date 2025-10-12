import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Test from "./components/Test";
import ProfileCardGenerator from "./components/ProfileCardGenerator";

function App() {
  return (
    <>
      <Navbar />
      {/* <h1 className="text-[20px] justify-self-center mt-[20px] font-bold">
        Welcome to React, Marshal 🚀
      </h1> */}

      {/* <div className="flex mt-[40px] justify-center">
        <Card
          image="https://res.cloudinary.com/dwmgepoeg/image/upload/v1751877903/pexels-photo-2270848_yrrbnw.jpg"
          description="The lion King!"
          title="First Card"
        />
        <Card
          image="https://res.cloudinary.com/dwmgepoeg/image/upload/v1752057132/pexels-photo-1003848_b6tykq.jpg"
          description="Elephants!"
          title="Second Card"
        />
      </div>
      <Counter />
      
    <Test/> */}
    <ProfileCardGenerator/>
    </>
  );
}

export default App;
