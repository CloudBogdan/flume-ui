import React, { useState } from "react";
import "./stl.scss";
//
import {
    Button, Checkbox, FabButton, Form, TextInput, Item, Radio, ItemInputsGroup, Col, Row, FormTitle, Alert
} from "./flume/main";

const App: React.FC = ()=> {

    const [alert_show, setAlertShow] = useState<boolean>(false);

    return (
        <div className="app">

            <Alert
                is_open={ alert_show }
                setIsOpen={ setAlertShow }
                title="Alert title"
                buttons={ [
                    {
                        text: "Yes",
                        type: "yes",
                        role: "close",
                        handle() {

                            console.log(this.type);
                            
                        }
                    },
                    {
                        text: "No",
                        role: "destructive",
                        handle() {

                            console.log(this.type);
                            
                        }
                    },
                    {
                        text: "Cancel",
                        role: "dismiss",
                        handle() {

                            console.log(this.type);
                            
                        }
                    }
                ] }
            >
                hello
            </Alert>
            
            <Col>
                <Row>

                    <Col>
                        <div className="row items_ver-align">
                            <Button>
                                Button
                            </Button>
                            <FabButton>
                                Fab
                            </FabButton>
                            <Button disabled>
                                Button disabled
                            </Button>
                            <FabButton disabled>
                                Fab d
                            </FabButton>
                        </div>
                        <div className="row items_ver-align">
                            <Button fill="transparent">
                                Button
                            </Button>
                            <FabButton fill="transparent">
                                F
                            </FabButton>
                        </div>
                        <div className="row items_ver-align">
                            <Button fill="clear">
                                Button
                            </Button>
                            <FabButton fill="clear">
                                F
                            </FabButton>
                        </div>
                        <div className="row items_ver-align">
                            <Button fill="outline">
                                Button
                            </Button>
                            <FabButton fill="outline">
                                F
                            </FabButton>
                        </div>
                        <div className="row items_ver-align">
                            <Button fill="grey">
                                Button
                            </Button>
                            <FabButton fill="grey">
                                F
                            </FabButton>
                        </div>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Item>
                                    <label>
                                        Enter your name:
                                    </label>
                                    <TextInput placeholder="hello" />
                                </Item>
                                <TextInput concentration placeholder="hello" />
                                <TextInput disabled placeholder="hello" />
                            </Col>
                            <Col>
                                <Row>
                                    <Item row>
                                        <label>
                                            Yes
                                        </label>
                                        <Checkbox />
                                    </Item>
                                    <Item row>
                                        <label>
                                            Yes
                                        </label>
                                        <Checkbox concentration />
                                    </Item>
                                    <Item row>
                                        <label>
                                            No
                                        </label>
                                        <Checkbox checked disabled />
                                    </Item>
                                    <Item row>
                                        <label>
                                            Maybe
                                        </label>
                                        <Checkbox disabled />
                                    </Item>
                                </Row>
                                <Row>
                                    <Radio name="radio" />
                                    <Radio name="radio" />
                                    <Radio name="radio" />
                                    <Radio name="radio" disabled />
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
                <Col>

                    <Form className="margin-bottom-max" onSubmit={ e=> e.preventDefault() } width="400px" align="horizontal">
                        <FormTitle className="text-to-center">
                            Form
                        </FormTitle>
                        <Item>
                            <label>Enter your name:</label>
                            <ItemInputsGroup>
                                <TextInput placeholder="First" />
                                <TextInput placeholder="Last" />
                            </ItemInputsGroup>
                        </Item>
                        <Item row>
                            <label>Your age:</label>
                            <TextInput type="email" />
                        </Item>
                        <Row>
                            <Button priority concentration >
                                Register
                            </Button>
                            <Button fill="transparent">
                                Login
                            </Button>
                        </Row>
                    </Form>
                    
                    <Button onClick={ ()=> setAlertShow(true) } concentration>
                        Show alert
                    </Button>

                </Col>
            </Col>
        </div>
    );
}

export default App;
