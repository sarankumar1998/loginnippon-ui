import React, { Component } from "react";
import { Col } from "react-bootstrap";

const stickyFooterStyle = {
    backgroundColor: "#D3D3D3",
    fontSize: "12px",
    color: "black",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
};

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Col style={stickyFooterStyle} sm={12}>
                    &copy; Copyright 2021 - <span><a href="https://ideassion.com/" style={{ color: 'black', textDecoration: "none" }} > Ideassion Technology Solution.</a></span>
                    All Rights Reserved
                </Col>
            </div>
        );
    }
}

