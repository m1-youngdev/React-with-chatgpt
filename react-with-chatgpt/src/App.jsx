import './App.css'
import Navbar from './components/Navbar'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  return (
    <>
      <Navbar/>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Welcome to React, Marshal 🚀
      </h1>

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <Button text= "Click Me" />
        <Button text= "Learn More" />
        <Button text= "Delete" />
      </div>
      <div  
      style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "2rem",
        }}>
          <Card
          image= "https://res.cloudinary.com/dwmgepoeg/image/upload/v1751877903/pexels-photo-2270848_yrrbnw.jpg"
          description= "The lion King!"
          title= "First Card"
          />
          <Card
          image= "https://res.cloudinary.com/dwmgepoeg/image/upload/v1752057132/pexels-photo-1003848_b6tykq.jpg"
          description= "Elephants!"
          title= "Second Card"
          />
      </div>
    

    </>
  )
}

export default App;
