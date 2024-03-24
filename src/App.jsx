import { useState, useEffect } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setIsloading] = useState(false);
  useEffect(() => {
    fetch("https://auth-rg69.onrender.com/api/products/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  return (
    <>
      <Header></Header>
      <div className="container">
        <form className="w-50 mx-auto d-flex flex-column mb-4 gap-2">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Enter name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Book name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Book price"
          />
          <select class="form-select" aria-label="Default select example">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="2"
            placeholder="Any description . . . . ."></textarea>
            <button className="btn btn-primary">Submit</button>
        </form>
        <div className="main">
          {books.map((book, index) => {
            return <Card></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
