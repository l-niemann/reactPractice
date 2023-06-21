import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout.js";
import { Calculator } from "./subApps/Calculator";
import { Restaurant } from "./subApps/restaurant/Restaurant";
import { Order } from "./subApps/restaurant/Order";
import { Cipher } from "./subApps/Cipher";
import { JumpGame } from "./subApps/JumpGame";
import { TodoList } from "./subApps/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/restaurant/order" element={<Order />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/cipher" element={<Cipher />} />
          <Route path="/jumping-game" element={<JumpGame />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
