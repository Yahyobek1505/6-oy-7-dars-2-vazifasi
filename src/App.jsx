import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import { FadeLoader } from "react-spinners";
import "./App.css";

function App() {
  const [phones, setPhones] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [pending, setPending] = useState(false)
  const nameRef = useRef("");
  const priseRef = useRef(0);
  const statusRef = useRef("active");
  const descRef = useRef("");

  useEffect(() => {
    setIsloading(true);
    fetch("https://auth-rg69.onrender.com/api/products/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);
  function validation(nameRef, priseRef, statusRef, descRef) {
    if (nameRef.current.value.trim() < 3) {
      alert("Name is empty!");
      nameRef.current.focus();
      return false;
    }
    if (Number(priseRef.current.value.trim() > 1000000)) {
      alert("Prise is not valid!");
      priseRef.current.focus();
      return false;
    }
    if (!statusRef.current.value) {
      alert("Status is empty!");
      statusRef.current.focus();
      return false;
    }
    if (descRef.current.value.trim() < 3) {
      alert("Description is empty!");
      descRef.current.focus();
      return false;
    }
    return true;
  }

  function handleClick(e) {
    e.preventDefault();
    const isValid = validation(nameRef, priseRef, statusRef, descRef);
    setPending(true);
    if (isValid) {
      const phone = {
        name: nameRef.current.value,
        description: descRef.current.value,
        status: statusRef.current.value,
        price: priseRef.current.value,
        category_id: 5,
      };

      fetch("https://auth-rg69.onrender.com/api/products ", {
    method: "POST",
    headers: {
        "Content-type": "application/json",
    },
    body: JSON.stringify(phone),
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if (data.id) {
            let copied = JSON.parse(JSON.stringify(phones));
            copied.push(data);
            setPhones(copied);
        }
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
      nameRef.current.value = "";
      priseRef.current.value = "";
      statusRef.current.value = "";
      descRef.current.value = "";
      setPending(false);
    });
    }
  }
  
  function handleDelete(id) {
    let isDelete = confirm("Rostdan ham ushbu ma'lumotni o'chirmoqchimisiz?")
    if (isDelete && id) {
      fetch(`https://auth-rg69.onrender.com/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {

        if (data.message == "Mahsulot muvaffaqiyatli o'chirildi") {
          let copied = JSON.parse(JSON.stringify(phones));
         copied = copied.filter(el =>{
            return el.id != id
          })
          setPhones(copied);
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }
  return (
    <>
      <Header></Header>
      <div className="container">
        <form className="w-50 mx-auto d-flex flex-column mb-4 gap-2">
          <label htmlFor="exampleFormControlInput2" className="form-label">
            Enter name
          </label>
          <input
            ref={nameRef}
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Phone name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Price
          </label>
          <input
            ref={priseRef}
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Phone price"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Status
          </label>
          <select
            ref={statusRef}
            className="form-select"
            aria-label="Default select example">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <textarea
            ref={descRef}
            className="form-control"
            id="exampleFormControlTextarea3"
            rows="2"
            placeholder="Any description . . . . ."></textarea>
          <button disabled = {pending ? true : false} onClick={handleClick} className="btn btn-primary">
          {pending ? "Loading....." : "Send"}  
          </button>
        </form>
        <div className="main">
          <div>
            {loading && <FadeLoader color="lightGreen" size={50}></FadeLoader>}
          </div>
          {!loading &&
            phones.map((el, index) => {
              return <Card deleteItem = {handleDelete} key={index} phone={el}></Card>;
            })}
        </div>
      </div>
    </>
  );
}

export default App;
