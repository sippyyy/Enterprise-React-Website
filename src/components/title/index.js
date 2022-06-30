import clsx from 'clsx'
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";

import style from './title.module.scss';

function Title({children,children2}) {
    return ( 
    <Container>
        <Row className={clsx(style.row__center)}>
            <Col lg={7} xs={10}>
                <div className={clsx(style.title__block)}>
                    <h3 className={clsx(style.title)}>{children}</h3>
                    <p className={clsx(style.title__desc)}>{children2}</p>
                </div>
            </Col>
        </Row>
    </Container>
     );
}

export default Title;