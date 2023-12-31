import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Menu } from "..";
import { Footer } from "..";
import { Container, Col, Row } from "react-bootstrap";

export default function MenuTwo() {
  return (
    <>
      <Menu />

      <Container className="p-3 my-3">
        <Row>
          <Col className="col-12 mb-3">
            <img src="/menu2.webp" alt="asdasd" style={{ width: "100%" }} />
          </Col>
          <Col className="col-12 my-3 text-center">
            <h1>ปลาซาบะย่างซอสเทริยากิ</h1>
          </Col>
          <Col className="col-12 mb-3">
            <p className="itim">
              ใครอยากทาน ปลาซาบะราดซอสเทริยากิ แบบดั้งเดิม
              แนะนำให้ลองทำตามสูตรนี้เลย เพราะนี่คือสูตรจาก เชฟโฌ
              เชฟชาวญี่ปุ่นที่มาอาศัยอยู่ในประเทศไทย
              รับรองว่าไม่ต้องไปทานถึงร้านอาหารญี่ปุ่น ก็จะได้ลิ้มรสชาติที่อร่อย
              ตามแบบฉบับชาวญี่ปุ่นแน่นอน
            </p>
          </Col>
          <Col className="itim">
            <p className="itim">ส่วนผสม</p>
            <ul className="mt-3">
              <li>ปลาซาบะ 1/2 ตัว</li>
              <li>แป้งเค้ก</li>
              <li>ต้นหอมญี่ปุ่น ปริมาณตามชอบ</li>
              <li>น้ำซุปดาชิ 2 ช้อนโต๊ะ</li>
              <li>ซอสโชยุ 1 ช้อนโต๊ะ</li>
              <li>เหล้ามิริน 2 ช้อนโต๊ะ</li>
              <li>สาเก 2 ช้อนตะ</li>
              <li>น้ำตาล 15 กรัม</li>
              <li>ขิงฝน 1 ช้อนชา</li>
            </ul>
          </Col>

          <Col className="col-12 mb-3 itim">
            <p className="itim">วิธีทำ</p>
            <ol>
              <li>
                ใช้กระดาษทิชชู่ ซับเนื้อปลาซาบะให้แห้ง จากนั้น
                แงะเอาก้างปลาออกให้เรียบร้อย แล้วโรยเกลือทั้ง 2 ด้าน
                เพื่อดับกลิ่นคาวปลา และ ดึงน้ำออกจากตัวปลา ทำให้เนื้อปลาแห้ง
                พักทิ้งไว้ 20 นาที
              </li>
              <li>
                หั่นรากต้นหอมญี่ปุ่นออก เสร็จแล้ว หั่นแบ่งออกเป็น 4 ส่วนเท่า ๆ
                กัน
              </li>
              <li>
                ทำซอสเทริยากิ โดยเตรียมถ้วยผสม ใส่น้ำซุปดาชิ ซอสโชยุ สาเก มิริน
                น้ำตาล ขิงฝน คนส่วนผสมทั้งหมดให้เข้ากัน
              </li>
              <li>
                พอครบ 20 นาที ให้นำเอาปลาซาบะมาซับให้แห้ง ด้วยกระดาษทิชชู่
                แล้วใช้มีดหั่นแบ่ง ให้ได้ขนาดตามที่ต้องการ
                เพื่อให้ซอสเข้าเนื้อปลาได้ง่ายขึ้น
                ให้ใช้มีดบั้งหนังปลาด้านบนด้วย
              </li>
              <li>
                นำเนื้อปลามาชุบแป้งเค้ก แค่พอบาง ๆ ไม่ต้องหนามาก จากนั้น
                ตั้งกระทะ ใส่น้ำมันเล็กน้อย ใส่ปลาและต้นหอมญี่ปุ่นที่หั่นไว้ลงไป
                ย่างปลาซาบะให้สุกทั้ง 2 ด้าน โดยใช้ไฟกลางค่อนไฟอ่อน
                เวลาวางให้วางด้านที่เป็นเนื้อปลาลงไปก่อน
                พอสุกแล้วให้พลิกกลับอีกด้าน เมื่อย่างปลาซาบะ และต้นหอมญี่ปุ่น
                จนสุกแล้ว ให้ตักขึ้นพักไว้
              </li>
              <li>
                เทซอสเทริยากิ ลงในกระทะ ใช้ไฟกลางค่อนไฟแรง
                เคี่ยวให้ซอสข้นเหนียวกำลังดี จากนั้น ใส่ปลาซาบะลงไป
                ราดซอสเทริยากิ ให้โดนเนื้อปลาทั่ว ๆ เพื่อให้ซอสขึ้นเงาสวยงาม
                ให้ใส่เหล้ามิรินลงไปเล็กน้อยด้วย เสร็จแล้ว ตักใส่จาน
                เสิร์ฟคู่กับต้นหอมญี่ปุ่น เป็นอันเสร็จ
              </li>
            </ol>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}
