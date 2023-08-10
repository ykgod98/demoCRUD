import { Inter, Libre_Barcode_128 } from 'next/font/google'
import swal from 'sweetalert2';
import axios from 'axios'; // {} 안에서는 function을 불러옴
import { useState, useEffect } from 'react';
import { read } from 'fs';

const inter = Inter({ subsets: ['latin'] })

const Home = () => {

  const [demoData, setdemoData] = useState([]);

  

  useEffect(() => {
    axios.get('http://localhost:4000/user')
      .then((res) => {
        setdemoData(res.data)
      })
  }, []);

  const data = {
    "demo_id": 12,
    "demo_name": "demo1"
  }
  const deletedemo_id = 12;
  const updateDemo_id = 1;

  const createData = () => {
    console.log("와 안돼누")
    axios.post(`http://localhost:4000/user`, data)
      .then((result) => {
        console.log(result.data)
      })
    //   .then(res => {
    // console.log(res);
    // })
  }

  const deleteData = () => {
    axios.delete(`http://localhost:4000/user/${deletedemo_id}`)
      .then((result) => {
        console.log(result.data)
      })
  }
  const updateData = () => {
    axios.patch(`http://localhost:4000/user/${updateDemo_id}`, data)
      .then((result) => {
        console.log(result.data)
      })
  }

  const readData = () => {
    
  }



  const handleClick = () => {
    swal.fire({
      icon: "success",
      title: "user생성버튼",
      text: "user를 생성할까요?",
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonText: "생성",
      cancelButtonText: "삭제",
      denyButtonText: "수정",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log("마들어오냐?")
        createData()
      } else if (result.isDenied) {
        updateData()
      } else {
        deleteData()
      }
    })
    demoData.map((x,y) => {
      console.log(x)
    })
  }
  return (
    <>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
      <br />
      {JSON.stringify(demoData)}
    </>


  )
}

export default Home;
