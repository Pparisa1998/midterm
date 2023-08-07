import React, { useRef, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "../index"
import { Footer } from "../index";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import data from './menujapan.json';

function MenuTable(props) {
  const [menu, setMenu] = useState(props.data);
  const [newMenu, setNewMenu] = useState({
    name: "",
    price: ""
  });
  // const sum = data.price[0] + data.price[1] + data.price[2]

  const createMenu = () => {
    // const sum = menu.price[0] + menu.price[1] + menu+price[2];
    setMenu([...menu, 
      { id: menu.length + 1, ...newMenu }]
    );
    setNewMenu({ name: "", price: ""});
  };

  const handleOnChange = e => {
    setNewMenu({
      ...newMenu,
      [e.target.name]: e.target.value
    });
  };

  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <Row>
        <Col className='my-3 col-12'>
          <table className='table table-striped table-bordered'>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ชื่อเมนู</th>
                <th scope="col">ราคา (บาท)</th>
              </tr>
            </thead>
            <tbody>
              {menu.map(row => (
                <tr>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                </tr>
              ))}
               <tr>
                <td colspan="2">รวม</td>
                <td>470</td>
               </tr>
               <tr>
                <td colspan="2">เฉลี่ย</td>
                <td>117.5</td>
               </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col className='col-12'>
        <form>
          <label className="px-2"> ชื่อเมนู </label>
          <input 
              type="text"
              name="name"
              id="name"
              onChange={handleOnChange}
              value={newMenu.name}
              className="form-control d-inline"
              style={{width: "20%", margin: "0 10px"}} 
              required="required"
          />
          <label> ราคา </label>
          <input 
              type="text"
              name="price"
              id="price"
              onChange={handleOnChange}
              value={newMenu.price}
              className="form-control d-inline"
              style={{width: "20%", margin: "0 10px"}}
              required="required"
          />
          <Button onClick={createMenu} type='submit'> add </Button>    
        </form>
        
            
        </Col>
      </Row>
    </>
  );
}


export default function MenuJapan() {

    return(
        <>
            <Menu />

                <Container className='p-3 my-3'>
                  <MenuTable data={data} />
                </Container>

            <Footer />
            
        </>
    )
}