import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { ChatRight } from "react-bootstrap-icons";

export const Newsletter = ({ status, message, onValidated }) => {
  // const [email, setEmail] = useState('');

  // useEffect(() => {
  //   if (status === 'success') clearFields();
  // }, [status])

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   email &&
  //   email.indexOf("@") > -1 &&
  //   onValidated({
  //     EMAIL: email
  //   })
  // }

  // const clearFields = () => {
  //   setEmail('');
  // }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          {/* <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row> */}
          <h3>“I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.”</h3>
          <h4 style={{textAlign: "right"}}> - Rosa Parks</h4>
        </div>
      </Col>
  )
}
