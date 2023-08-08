import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "../index";
import { Footer } from "../index";
import { Container, Row, Col, Button, Table } from "react-bootstrap";

export default function MenuJapan() {
  const data = [
    { name: "ซูชิหน้าปลาแซลม่อน", price: 120 },
    { name: "ปลาซาบะย่างซีอิ้ว", price: 130 },
    { name: "เกี๊ยวซ่า", price: 150 },
  ];

  const sum = data.reduce((plus, object) => {
    return plus + object.price;
  }, 0);

  const nameMenu = useRef(null);
  const priceMenu = useRef(null);

  const [menuList, setMenuList] = useState(data);
  const [totalPrice, setTotalPrice] = useState(sum);

  const avg = (totalPrice / menuList.length).toFixed(2);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const val1 = nameMenu.current.value;
    const val2 = priceMenu.current.value;

    setMenuList((current) => [...current, { name: val1, price: val2 }]);
    setTotalPrice(parseInt(totalPrice) + parseInt(priceMenu.current.value));

    event.target.reset();
  };

  return (
    <>
      <Menu />

      <Container className="p-3 my-3">
        <Row>
          <Col className="col-12 my-3">
            <Table striped bordered>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" style={{ width: "50%" }}>
                    ชื่อเมนู
                  </th>
                  <th scope="col">ราคา (บาท)</th>
                </tr>
              </thead>
              <tbody>
                {menuList.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{val.name}</td>
                      <td>{val.price}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td colspan="2">รวม</td>
                  <td>
                    {totalPrice} <span className="px-3"></span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">เฉลี่ย</td>
                  <td>
                    {avg} <span className="px-3"></span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Row>
            <Col className="col-12">
              <form onSubmit={handleFormSubmit}>
                <h1>เพิ่มเมนูใหม่</h1>
                <label className="px-2">ชื่อเมนู</label>
                <input
                  ref={nameMenu}
                  name="name"
                  required="required"
                  className="form-control d-inline"
                  style={{ width: "20%", margin: "0 10px" }}
                />
                <label>ราคา</label>
                <input
                  ref={priceMenu}
                  name="price"
                  required="required"
                  className="form-control d-inline"
                  style={{ width: "20%", margin: "0 10px" }}
                />
                <Button type="submit"> add </Button>
              </form>
            </Col>
          </Row>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
