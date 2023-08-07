import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Image,
} from "react-bootstrap";
import Creater from "./pages/creater";
import MenuJapan from "./pages/menujapan";
import MenuOne from "./pages/menuone";
import MenuTwo from "./pages/menutwo";
import MenuThree from "./pages/menuthree";

const menu = [
  {
    id: 0,
    name: "ซูชิหน้าปลาแซลม่อน",
    description:
      "ซูชิหน้าปลาดิบ เมนูอาหารญี่ปุ่น ยอดฮิต ที่ถือเป็นอาหารประจำชาติอีกหนึ่งเมนู  โดยเฉพาะ ซูชิหน้าปลาแซลม่อน ซึ่งเป็นซูชิหน้าปลาดิบที่คนไทยชอบรับประทานมาก ๆ วิธีการทำก็ไม่ยาก เพียงแค่หุงข้าว และ ปรุงข้าวญี่ปุ่น ให้พร้อมปั้นเป็นข้าวซูชิ แล่เนื้อปลาแซลม่อนไว้ด้านบน เพียงเท่านี้ ก็พร้อมคีบเข้าปาก ทานได้แล้ว",
    image: "/menu1.webp",
  },
  {
    id: 1,
    name: "ปลาซาบะย่างซอสเทริยากิ",
    description:
      "ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย ตามแบบฉบับชาวญี่ปุ่นแน่นอน",
    image: "/menu2.webp",
  },
  {
    id: 2,
    name: "เกี๊ยวซ่า",
    description:
      "ถือว่าเป็น เมนูอาหารญี่ปุ่น ที่เหมาะกับเป็นของว่างมาก ๆ สำหรับ เกี๊ยวซ่า ด้วยรสสัมผัสจากแป้งเกี๊ยวที่กรุบกรอบและไส้หมู ผักต่าง ๆ ที่สอดไส้อยู่ด้านใน พอจิ้มกับซอสโชยุที่ให้รสเปรี้ยว ก็จะทำให้ได้ความกรอบนอกนุ่มใน พร้อมรสชาติเปรี้ยวจี๊ดที่ช่วยให้อร่อยมากขึ้น ซึ่งเมนู เกี๊ยวซ่า นั้นถือว่าเป็นเมนูเกี๊ยวทอดที่ฮิตมากในประเทศญี่ปุ่น ก่อนที่จะได้รับความนิยมอย่างมากในประเทศไทย โดยสูตรและส่วนผสมต่าง ๆ มาจาก Youtuber ช่อง daddy cooking",
    image: "/menu3.webp",
  },
];

function List(props) {
  return (
    <>
      <div className="mt-5">
        <img src={props.image} className="image__round mb-3" alt={props.name} />
      </div>
      <div className="h3 my-3 mitr">{props.name}</div>
      <div className="h5 itim">{props.description}</div>
    </>
  );
}

function MyLink(props) {
  return (
    <NavLink
      className="text-change px-2"
      to={props.path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",
        };
      }}
    >
      {props.linkName}
    </NavLink>
  );
}

function MyLinkMenu(props) {
  return (
    <NavLink className="btn btn-secondary my-3 itim" to={props.path}>
      {props.linkName}
    </NavLink>
  );
}

function MyLinkFooter(props) {
  return (
    <NavLink
      className="text-noline px-2"
      to={props.path}
      style={({ isActive }) => {
        return {
          textDecoration: isActive ? "none" : "underline",
        };
      }}
    >
      {props.linkName}
    </NavLink>
  );
}

export function Menu() {
  return (
    <>
      <Navbar bg="warning">
        <Navbar.Brand href="#home" className="ms-4">
          <img
            alt="Sushi Image"
            src="/sushi.webp" //ใส่ path รูป
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="me-auto sarabun">
          <MyLink path="/" linkName="หน้าแรก" />
          <MyLink path="/menulist" linkName="เมนูอาหารญี่ปุ่น" />
          <MyLink path="/creater" linkName="ผู้จัดทำ" />
        </Nav>
      </Navbar>
    </>
  );
}

function FoodList() {
  return (
    <>
      <Row>
        <Col className="text-center p-4">
          <h3 className="text--line mitr">วิธีทำอาหารญี่ปุ่นยอดฮิต</h3>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <List
            name={menu[0].name}
            description={menu[0].description}
            image={menu[0].image}
          />

          <MyLinkMenu path="/menuone" linkName="ดูวิธีทำ &#62;&#62;" />
        </Col>

        <Col className="text-center">
          <List
            name={menu[1].name}
            description={menu[1].description}
            image={menu[1].image}
          />

          <MyLinkMenu path="/menutwo" linkName="ดูวิธีทำ &#62;&#62;" />
        </Col>

        <Col className="text-center">
          <List
            name={menu[2].name}
            description={menu[2].description}
            image={menu[2].image}
          />

          <MyLinkMenu path="/menuthree" linkName="ดูวิธีทำ &#62;&#62;" />
        </Col>
      </Row>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer class="footer mt-4 sarabun">
        <div>
          <span>&copy; 2023 </span>
          <MyLinkFooter path="/creater" linkName=" P A R I S A " />
        </div>
        <div>
          <a className="text-noline" href="#">
            Back to top
          </a>
        </div>
      </footer>
    </>
  );
}

function Index() {
  return (
    <>
      <Menu />

      <Container className="p-3 my-3">
        <FoodList />
      </Container>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Index />} />
        <Route path="/menulist" element={<MenuJapan />}></Route>
        <Route path="/creater" element={<Creater />} />
        <Route path="/menuone" element={<MenuOne />} />
        <Route path="/menutwo" element={<MenuTwo />} />
        <Route path="/menuthree" element={<MenuThree />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
