import Heading from "../layout/Heading";
import { Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

// NB ADD DATE FORMATTER
export default function Booking() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Heading title="Booking" />
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="name" placeholder="Full name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Email" />

          <div>
            <div className="row">
              <div className="col-md-4">
                <Form.Group controlId="dob">
                  <Form.Label>Select Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  />
                </Form.Group>
              </div>
            </div>
          </div>
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}
// HAR INNSTALERT DENNE: npm install react-bootstrap bootstrap react-datepicker

