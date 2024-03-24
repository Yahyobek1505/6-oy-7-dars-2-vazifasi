
import './index.css'
function Card(props) {
  const {name, description, price, status, id} = props.phone;
  const {deleteItem} = props
  return (
    <>
    <div className="card">
  <img src="https://www.cnet.com/a/img/resize/592e5101f4fee1caf72f9e0169c8784ddf9eb12a/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=576&width=768" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
<h4>{status}</h4>
<p>${price}</p>
    <p className="card-text">{description}</p>
    <div className="row gap-2">
    <a href="#" className="col-4 btn btn-primary">Update</a>
    <a href="#" className="  col-4 btn btn-danger" onClick= {() => {deleteItem(id)}}>Delete</a>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
