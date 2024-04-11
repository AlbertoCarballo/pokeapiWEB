import "../css/EncabezadoDesign.css";
import {
    Row,
    Col,
    Image,
} from "react-bootstrap/";
function Encabezado({ logo, titulo }) {
    return (
        <>
            <Row style={{ paddingBottom: "1em" }} className="justify-content-md-center">
                <Col lg={2}>
                    <Image
                        className="img-thumbnail"
                        src={logo}
                        sizes="150px"
                        style={{ border: "0" }}
                    />
                </Col>
            </Row>
            <Row style={{ paddingBottom: "1em" }} className="justify-content-md-center">
                <Col lg={8}>
                    <h1 className="display-1 " style={{ paddingTop: "0.7em" }}>
                        {titulo}
                    </h1>
                </Col>
            </Row>
        </>

    );
}

export default Encabezado;