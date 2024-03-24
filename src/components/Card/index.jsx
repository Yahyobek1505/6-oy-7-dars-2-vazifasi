
import './index.css'
function Card() {
  return (
    <>
    <div className="card">
  <img src="https://www.cnet.com/a/img/resize/592e5101f4fee1caf72f9e0169c8784ddf9eb12a/hub/2023/05/04/31dfdcf2-1ac3-4320-b40c-4c356300f06e/google-pixel-7a-phone-14.jpg?auto=webp&fit=crop&height=576&width=768" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className="row gap-2">
    <a href="#" className="col-4 btn btn-primary">Update</a>
    <a href="#" className="  col-4 btn btn-danger">Delete</a>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
