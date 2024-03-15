import Cart from "./components/Cart";
import Courses from "./components/Courses";


function App() {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center my-8">Course Registration</h1>
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <Courses></Courses>
          </div>
          <div className="col-span-2">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
