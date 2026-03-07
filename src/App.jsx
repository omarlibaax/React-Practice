import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Homecards from "./components/Homecards"; 

const App = () => {
  return (
    <> 
<Nav /> 
<Hero />
<Homecards />
<Cards/>


<section className="max-w-lg mx-auto my-10 px-6">
<button className="w-full bg-blue-900 text-white py-4 rounded-xl hover:bg-blue-700">
View All Developers
</button>
</section>
    </>
)
}
export default App;