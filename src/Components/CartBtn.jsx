import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
const CartBtn = () => {
  const navigate = useNavigate()
  const items = useSelector((state) => state.items)
  // console.log(items)
  const handleRoute = () => {
    items.length > 0 ?
    navigate('/addtocart'): alert("please add Items!")
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      <button className="add-cart" onClick={handleRoute}>Add to Cart</button>
    </div>
  )
}

export default CartBtn


