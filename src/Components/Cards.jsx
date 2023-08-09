import { useDispatch,useSelector } from 'react-redux'
import { addtoqty, removeqty,editAbleVal } from '../features/cardflow/reducer';
const Cards = ({id,name,company,price,qty}) => {
    const dispatch = useDispatch()
    const allItem = useSelector((state) => state.items.find((item) => item.id === id))
    const handleChange = (e) => {
        dispatch(editAbleVal({id,name,company,price,qty:e.target.value}))
    }
  return(
    <>
        <div className="col-12 col-md-3 col-lg-4 card my-3 mx-1">
            <div className="card-inner">
                <div><span className='title'>Id: </span>{id}</div>
                <div><span className='title'>Company: </span>{company}</div>
                <div><span className='title'>Name: </span>{name}</div>
                <div><span className='title'>pkr: </span>{price}</div>
                <div>
                    <button className="count-btn me-1" onClick={() => dispatch(removeqty({id,name,company,price}))}>-</button>
                    <input type="number" style={{width:"40px"}} value={allItem ? allItem.qty : 0} onChange={handleChange} />
                    <button className="count-btn ms-1" onClick={() => dispatch(addtoqty({id,name,company,price}))}>+</button>
                </div>
            </div>
        </div>
    </>
  ) 
}

export default Cards

