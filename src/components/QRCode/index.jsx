import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { server } from '../../urlConfig';

const QRCode = () => {
  //state
  const [qrCodeData, setQrCodeData] = useState([]);
  useEffect(() => {
    fetch(`${server}/qrcode`)
      .then((res) => res.json())
      .then((data) => setQrCodeData(data));
  }, [qrCodeData]);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4 text-center">All QR Code</h1>
        </Col>
      </Row>

      <Row className="my-5">
        {qrCodeData.length > 0 &&
          qrCodeData.map((qrData, index) => (
            <Col md={4} key={index} className="text-center my-5">
              <Card className="align-items-center">
                <Card.Img
                  variant="top"
                  className="img-fluid"
                  src={`${qrData.src}`}
                />
                <Card.Body>
                  <Card.Title className={``}>Name:{qrData.name}</Card.Title>
                  <Card.Text className="text-justify">
                    Bus Name:{qrData.busName}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    SeatNo:{qrData.seatNo}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    Coach No.:{qrData.coachNo}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    From:{qrData.fromPlace}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    to:{qrData.toPlace}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    Journey Date:{qrData.journeyDate}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    time:{qrData.time}
                  </Card.Text>
                  <Card.Text className="text-justify">
                    Receive Date:{qrData.receiveDate}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default QRCode;
