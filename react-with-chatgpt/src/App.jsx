import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Likebutton from "./components/Likebutton";

function App() {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Welcome to React, Marshal 🚀
      </h1>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Button text="Click Me" />
        <Button text="Learn More" />
        <Button text="Delete" />
      </div>
      <div className="flex mt-[40px] justify-center">
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
      
       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">React Props + useState</h1>

      <Likebutton title="My First React Post" />
      <Likebutton title="Learning Tailwind with React" />
      <Likebutton title="State and Props Example" />
    </div>
    </>
  );
}

export default App;
