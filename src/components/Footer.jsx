import React, { useState } from "react";
import "../components/footer.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Image,
  Button,
  Row,
  Col,
  Stack,
} from "react-bootstrap";
import logo from "../assets/images/Logo.png";
import { HiOutlinePhone } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { SlLocationPin } from "react-icons/sl";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <div className="body-backgroundColor">
        <Container>
          <div className="center-style">
            <Image src={logo} alt="logo" />
            <p className="center-text-style">
              We are an agency that services premium clients for their
              requirements around sports, music, entertainment & bespoke
              experiences. Our <br /> team of experienced sports travel
              professionals will ensure an unforgettable experience for you and
              guests at the event of your choice.
            </p>
          </div>
          <hr className="line-style-three" />
          <Row>
            <Col>
              <span className="footer-heading">Quick Pages</span>
              <Stack direction="vertical" className="footer-text" gap={2}>
                <span>Home</span>
                <span>About Us</span>
                <span>Blogs</span>
                <span>Case Studies</span>
                <span>Contact Us</span>
              </Stack>
            </Col>
            <Col>
              <span className="footer-heading">Tickets</span>
              <Stack direction="vertical" className="footer-text" gap={2}>
                <span>Football</span>
                <span>Cricket</span>
                <span>Motosports</span>
                <span>Tennis</span>
                <span>Golf</span>
                <span>Rugby</span>
                <span>Olympic</span>
                <span>Others</span>
              </Stack>
            </Col>
            <Col>
              <span className="footer-heading">Services</span>
              <Stack direction="vertical" className="footer-text" gap={2}>
                <span>Sports</span>
                <span>Entertainment</span>
                <span>Bespoke Travel</span>
                <span>Business</span>
              </Stack>
            </Col>
            <Col lg={4}>
              <span className="footer-heading">Contact</span>
              <Stack direction="vertical" className="footer-text" gap={2}>
                <span>
                  <HiOutlinePhone className="phone-style" />
                  +91 9663921770
                </span>
                <span>
                  <CgMail className="phone-style" size={25} />
                  info@gainaccess.in
                </span>
                <span>
                  <SlLocationPin className="phone-style" />
                  #439, 3rd floor, Sipani East Avenue, 18th main, Koramangala
                  6th block, Bangalore - 560095, India
                </span>
              </Stack>
            </Col>
          </Row>
        </Container>
        <div className="footerbackground-color">
          <span className="footer-mail">
            © 2023 Gain Access. All rights reserved.
          </span>
          <div>
            <span>
              <TiSocialFacebookCircular size={40} />
            </span>
            <span>
              <TiSocialLinkedinCircular size={40} />
            </span>
            <span>
              <TiSocialTwitterCircular size={42} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
