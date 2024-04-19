import React, { useState } from "react";
import "../components/form.css";
import {
  Button,
  Col,
  Container,
  Form,
  FormCheck,
  Row,
  Stack,
} from "react-bootstrap";
import { LiaCheckCircleSolid } from "react-icons/lia";
import { Bs2Circle } from "react-icons/bs";
import { Bs3Circle } from "react-icons/bs";

const Form1 = () => {
  const [item, setItem] = useState({ kindOfStand: "", another: "another" });

  const { kindOfStand } = item;

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value);

    setItem((prevState) => ({
      ...prevState,
      kindOfStand: e.target.value,
    }));
  };

  return (
    <>
      <div className="body-backgroundColor">
        <Container>
          <Row>
            <Col lg={8} sm={6} xs={12} md={12}>
              <Stack direction="horizontal" className="form-style" gap={4}>
                <div className="round-one">
                  <LiaCheckCircleSolid className="check-one" />
                  CHOOSE YOUR TRIP
                </div>
                <div className="vr" />
                <div className="round-two">
                  <Bs2Circle className="check-two" />
                  DETAILS
                </div>
                <div className="vr" />
                <div className="round-three">
                  <Bs3Circle className="check-three" />
                  PAYMENT
                </div>
              </Stack>
              <p className="text-booking">WHO ARE YOU BOOKING FOR?</p>
              <Form
                style={{ display: "flex", flexDirection: "row", gap: "30px" }}
              >
                <Form.Group>
                  <Form.Check
                    className="radio-one"
                    type="radio"
                    value="design"
                    label="I 'm the main traveller"
                    onChange={handleChange}
                    checked={kindOfStand === "design"}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    className="radio-one"
                    type="radio"
                    value="food"
                    label="I'm booking for somebody else"
                    onChange={handleChange}
                    checked={kindOfStand === "food"}
                  />
                </Form.Group>
              </Form>
              <hr className="line-style" />
              <div className="details-menu">
                <span className="booking-one">
                  BOOKING DETAILS - MAIN TRAVELLER
                </span>
                <span className="booking-two">Edit</span>
              </div>
              <p className="booking-two">Fill in your details</p>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">First name</Form.Label>
                    <Form.Control id="form-control" type="text" />
                  </Col>
                  <Col>
                    <Form.Label className="label-style">Last name</Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">Email ID</Form.Label>
                    <Form.Control id="form-control" type="email" />
                  </Col>
                  <Col>
                    <Form.Label className="label-style">
                      Phone number
                    </Form.Label>
                    <Form.Control type="number" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">Nationality</Form.Label>{" "}
                    <br />
                    <select id="form-select">
                      <option>India</option>
                      <option>Sreelanka</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Form.Group>
                <p className="label-style">Date of birth (18)</p>
                <Form.Group as={Row} className="mb-3">
                  <Col className="dob-space">
                    <div>
                      <Form.Label>Day</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          DD
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Month</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          MM
                        </option>
                        <option>JAN</option>
                        <option>FEB</option>
                        <option>MAR</option>
                        <option>Apr</option>
                        <option>MAY</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Year</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          YYYY
                        </option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                      </select>
                    </div>
                  </Col>
                  <Col />
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">
                      Address line 1
                    </Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">
                      Address line 2
                    </Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">ZIP code</Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                  <Col>
                    <Form.Label className="label-style">city</Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-5">
                  <Col>
                    <Form.Label className="label-style">Country</Form.Label>{" "}
                    <br />
                    <select id="form-select">
                      <option>India</option>
                      <option>Sreelanka</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Form.Group>
                <hr className="line-style" />
                <div className="details-menu">
                  <span className="booking-one">TRAVELLER 2</span>
                  <span className="booking-two">Reset</span>
                </div>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">First name</Form.Label>
                    <Form.Control id="form-control" type="text" />
                  </Col>
                  <Col>
                    <Form.Label className="label-style">Last name</Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">Nationality</Form.Label>{" "}
                    <br />
                    <select id="form-select">
                      <option>India</option>
                      <option>Sreelanka</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Form.Group>
                <p className="label-style">Date of birth (18)</p>
                <Form.Group as={Row} className="mb-5">
                  <Col className="dob-space">
                    <div>
                      <Form.Label>Day</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          DD
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Month</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          MM
                        </option>
                        <option>JAN</option>
                        <option>FEB</option>
                        <option>MAR</option>
                        <option>Apr</option>
                        <option>MAY</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Year</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          YYYY
                        </option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                      </select>
                    </div>
                  </Col>
                  <Col />
                </Form.Group>
                <hr className="line-style" />
                <div className="details-menu">
                  <span className="booking-one">TRAVELLER 3</span>
                  <span className="booking-two">Reset</span>
                </div>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">First name</Form.Label>
                    <Form.Control id="form-control" type="text" />
                  </Col>
                  <Col>
                    <Form.Label className="label-style">Last name</Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">Nationality</Form.Label>{" "}
                    <br />
                    <select id="form-select">
                      <option>India</option>
                      <option>Sreelanka</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Form.Group>
                <p className="label-style">Date of birth (18)</p>
                <Form.Group as={Row} className="mb-5">
                  <Col className="dob-space">
                    <div>
                      <Form.Label>Day</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          DD
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Month</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          MM
                        </option>
                        <option>JAN</option>
                        <option>FEB</option>
                        <option>MAR</option>
                        <option>Apr</option>
                        <option>MAY</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Year</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          YYYY
                        </option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                      </select>
                    </div>
                  </Col>
                  <Col />
                </Form.Group>
                <hr className="line-style" />
                <div className="details-menu">
                  <span className="booking-one">TRAVELLER 4</span>
                  <span className="booking-two">Reset</span>
                </div>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">First name</Form.Label>
                    <Form.Control id="form-control" type="text" />
                  </Col>
                  <Col>
                    <Form.Label className="label-style">Last name</Form.Label>
                    <Form.Control type="text" id="form-control" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                  <Col>
                    <Form.Label className="label-style">Nationality</Form.Label>{" "}
                    <br />
                    <select id="form-select">
                      <option>India</option>
                      <option>Sreelanka</option>
                    </select>
                  </Col>
                  <Col></Col>
                </Form.Group>
                <p className="label-style">Date of birth (18)</p>
                <Form.Group as={Row} className="mb-5">
                  <Col className="dob-space">
                    <div>
                      <Form.Label>Day</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          DD
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Month</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          MM
                        </option>
                        <option>JAN</option>
                        <option>FEB</option>
                        <option>MAR</option>
                        <option>Apr</option>
                        <option>MAY</option>
                      </select>
                    </div>
                    <div>
                      <Form.Label>Year</Form.Label>
                      <br />
                      <select id="form-dob">
                        <option disabled="disabled" selected="selected">
                          YYYY
                        </option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                      </select>
                    </div>
                  </Col>
                  <Col />
                </Form.Group>
                <hr className="line-style" />
              </Form>
              <p className="booking-one">EVENT ORGANIZER RESTRICTIONS</p>
              <p className="booking-two">
                To avoid disappointment on the day of the event. we would like
                to bring the following restrictions to your attention:
              </p>
              <div className="content-style">
                <span>
                  • Fans from Liverpool are not allowed to visit the event
                </span>
                <br />
                <span>
                  • In some cases a copy of identification will be required to
                  avoid any doubt of the above. <br />
                  Additionally, some event organizers might request a signed
                  code of conduct declaration form.
                  <br />
                  We will contact you if necessary.
                </span>
              </div>
              <Form.Check
                type="checkbox"
                className="checkbox-style"
                label="Hereby I agree with the terms and conditions of the event organizer"
              />
              <Button className="pay-style">Finalise and pay</Button>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
        <div className="line-style-two" />
      </div>
    </>
  );
};

export default Form1;
