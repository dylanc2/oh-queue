import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StudentPage from './pages/StudentPage';
import AdminPage from './pages/AdminPage';
import Home from './pages/Home'


function App() {
  // Set state here for admin and student view. If there was a database, we would get tasks from the databse

  const [items, setItems] = useState([]);
  const [open, setAccess] = useState(false);

  function handleAddItem(name) {
    const t = Date().toLocaleString();
    const itemObj = {
      title: name,
      time: t,
      key: items.length
    }
    setItems([...items, itemObj])
  }

  function handleDeleteItem(key) {
    const newItems = items.filter(item => item.key !== key);
    setItems(newItems);
  }

  function handleToggleAccess() {
    setAccess(!open);
    console.log(open);
  }

  return (
    <div>
      <h1>OH-Queue</h1>
      <Router>
          <Switch>
              <Route path="/student">
                  <StudentPage deleteItem={handleDeleteItem} itemsArray={items} addItem={handleAddItem} access={open} />
              </Route>
              <Route path="/admin">
                <AdminPage deleteItem={handleDeleteItem} itemsArray={items} access={open} toggleAccess={handleToggleAccess}/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </div>
    
  );
}

export default App;
