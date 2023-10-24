import { useState } from "react";
import Title from "./Title";
import Menu from "./Menu";
import menu from "./data";
import Categories from "./Categories";

const allCategories = ['all',...new Set(menu.map((item) => item.category))]

const App = () => {
  const [menuItem, setMenuItem] = useState(menu)
  const [categories, setCategories] = useState(allCategories)
  
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItem(menu)
      return;
    }
    const newItems = menu.filter((item)=> item.category === category)
    setMenuItem(newItems)
  }
  
  return (
  <main>
    <section className="menu">
      <Title text='our menu'/>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItem}/>
    </section>
  </main>
  );
};
export default App;
