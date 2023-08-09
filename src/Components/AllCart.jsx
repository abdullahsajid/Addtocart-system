import { useSelector }  from 'react-redux'
import React from 'react'
const AllCart = () => {
  const allItem = useSelector((state) => state.items)
  // console.log(allItem)
  return (
    <div className='row container-fluid align-items-center justify-content-center'style={{margin:"0 auto"}}>
        {allItem.map((val,index) => (
          <React.Fragment key={val.id}>
          {val.qty > 0 ?
          <div className="col-12 col-md-3 col-lg-4 card my-3 mx-1" key={index}>
            <div className='card-inner'>
              <p>ID: {val.id}</p>
              <p>Quantity: {val.qty}</p>
            </div>
          </div>: ""}
          </React.Fragment>
        ))}
    </div>
  )
}

export default AllCart
