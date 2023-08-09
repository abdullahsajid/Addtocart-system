import {useState} from 'react'
import Card from '../Components/Cards'
import data from '../data/data.json'
import CartBtn from './CartBtn'

const Main = () => {
  const [value,setValue] = useState("")

  return (
    <div className='main'>
        <div className='row container-fluid align-items-center justify-content-center'style={{margin:"0 auto"}}>
          <div className='col-12 card-inner my-3'>
            <p style={{fontSize:"20px",fontWeight:"500"}}>Search Here!</p>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} style={{minWidth:"331px",padding:"7px",borderRadius: "7px",border: "1px solid #000",outline:"none"}} />
          </div>
          {data.filter((val) => (val.name.toLowerCase().includes(value)))
          .map((item,index) => (
            <Card key={index}
              id={item.id}
              name={item.name}
              company={item.company}
              price={item.price}
              qty={item.qty}
              />
            ))}
        </div>
        <CartBtn/>
    </div>
  )
}

export default Main
