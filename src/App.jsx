import { useState } from 'react'
import './App.css';

const menu = [
  {
    "id": 1,
    "name": "珍珠奶茶",
    "description": "香濃奶茶搭配QQ珍珠",
    "price": 50,
    "inventory": 20
  },
  {
    "id": 2,
    "name": "冬瓜檸檬",
    "description": "清新冬瓜配上新鮮檸檬",
    "price": 45,
    "inventory": 18
  },
  {
    "id": 3,
    "name": "翡翠檸檬",
    "description": "綠茶與檸檬的完美結合",
    "price": 55,
    "inventory": 34
  },
  {
    "id": 4,
    "name": "四季春茶",
    "description": "香醇四季春茶，回甘無比",
    "price": 45,
    "inventory": 10
  },
  {
    "id": 5,
    "name": "阿薩姆奶茶",
    "description": "阿薩姆紅茶搭配香醇鮮奶",
    "price": 50,
    "inventory": 25
  },
  {
    "id": 6,
    "name": "檸檬冰茶",
    "description": "檸檬與冰茶的清新組合",
    "price": 45,
    "inventory": 20
  },
  {
    "id": 7,
    "name": "芒果綠茶",
    "description": "芒果與綠茶的獨特風味",
    "price": 55,
    "inventory": 18
  },
  {
    "id": 8,
    "name": "抹茶拿鐵",
    "description": "抹茶與鮮奶的絕配",
    "price": 60,
    "inventory": 20
  }

]


function App() {
  const [data, setData] = useState(menu);
  const [editingState, setEditingState] = useState(data.map(item => ({ id: item.id, editing: false })));

  //編輯功能
  const toggleEditing = (itemId) => {
    setEditingState(prevState =>
      prevState.map(item => {
        if (item.id === itemId) {
          return { ...item, editing: !item.editing };
        }
        return item;
      })
    );
  };

  //刪除功能
  const handleDelete = (itemId) => {
    // 刪除此 id 的資料
    const updatedData = data.filter((item) => item.id !== itemId);
    setData(updatedData);

    // 刪除此 id 的 editing state
    setEditingState((prevState) =>
      prevState.filter((state) => state.id !== itemId)
    );
  };

  //新增一列
  //初始新增一列的資料
  const initialNewItem = {
    id: data.length + 1, // 生成新的唯一 ID
    name: "",
    description: "",
    price: 0,
    inventory: 0
  };

  const handleAdd = () => {
    setData((prevData) => [...prevData, initialNewItem]);
    setEditingState((prevState) => [...prevState, { id: initialNewItem.id, editing: true }
    ]);
  };

  return (
    <div className='container'>
      <h1 className="mt-5 text-center fw-bold">餐點管理工具</h1>
      <table className="table table-striped border border-radius mb-5">
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  {editingState.find((state) => state.id === item.id).editing ? (
                    <input type="text" value={item.name} onChange={(e) => {
                      const updateData = data.map((itemM) =>
                        itemM.id === item.id ? { ...itemM, name: e.target.value } : itemM); setData(updateData);
                    }} />) : (item.name)}
                </td>
                <td>
                  {editingState.find((state) => state.id === item.id).editing ? (<input type="text" value={item.description} onChange={(e) => { const updateData = data.map((itemM) => itemM.id === item.id ? { ...itemM, description: e.target.value } : itemM); setData(updateData); }} />) : (item.description)}
                </td>
                <td>
                  {editingState.find((state) => state.id === item.id).editing ? (<input type="text" value={item.price} onChange={(e) => { const updateData = data.map((itemM) => itemM.id === item.id ? { ...itemM, price: e.target.value } : itemM); setData(updateData); }} />) : (item.price)}
                </td>
                <td>
                  {editingState.find((state) => state.id === item.id).editing ? (
                    <div>
                      <button type="button" className="btn btn-light border me-2" onClick={() => setData((prevData) => prevData.map((itemM) => itemM.id === item.id ? { ...itemM, inventory: Math.max(0, itemM.inventory - 1) } : itemM))}> - </button>
                      <span>{item.inventory}</span>
                      <button type="button" className="btn btn-light border ms-2" onClick={() => setData((prevData) => prevData.map((itemM) => itemM.id === item.id ? { ...itemM, inventory: itemM.inventory + 1 } : itemM
                      ))}> + </button></div>) : (item.inventory)}
                </td>

                <td>
                  <button type="button" className="btn btn-light border me-2" onClick={() => toggleEditing(item.id)} >
                    {editingState.find((state) => state.id === item.id).editing ? '儲存' : '編輯'}
                  </button>

                  <button type="button" className="btn btn-light border" onClick={() => handleDelete(item.id)}>刪除
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan="5" className="text-center">
              <button type="button" className="btn btn-dark border w-50" onClick={handleAdd}>新增一列</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default App;
