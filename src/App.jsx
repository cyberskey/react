import { useState } from 'react'

const data = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "decription": "香濃奶茶搭配QQ珍珠",
    "price": 50,
    "inventory": 20
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "decription": "清新冬瓜配上新鮮檸檬",
    "price": 45,
    "inventory": 18
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "decription": "綠茶與檸檬的完美結合",
    "price": 55,
    "inventory": 34
  },
  {
    "id": 4,
    "name": "四季春茶",
    "decription": "香醇四季春茶，回甘無比",
    "price": 45,
    "inventory": 10
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "decription": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50,
    "inventory": 25
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "decription": "檸檬與冰茶的清新組合",
    "price": 45,
    "inventory": 20
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "decription": "芒果與綠茶的獨特風味",
    "price": 55,
    "inventory": 18
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "decription": "抹茶與鮮奶的絕配",
    "price": 60,
    "inventory": 20
  }

]

function App() {

  let [count, setCount] = useState(0);

  return (
    <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th>品項</th>
            <th>描述</th>
            <th>價格</th>
            <th>庫存</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item) => {
              count = item.inventory

              return (
                <tr key={item.id} >
                  <td>{item.name}</td>
                  <td>{item.decription}</td>
                  <td>{item.price}</td>
                  <td><button onClick={() => setCount(item.inventory -= 1)}>-</button>{count}<button onClick={() => setCount(item.inventory += 1)}>+</button></td>
                  <td><button type="button" className='btn'>編輯</button></td>
                </tr>
              )
            })
          }


        </tbody>
      </table>
    </div >
  )
}

export default App;
