import React, { useState } from "react";
import "./stl.scss";
//
import {
    Button, Checkbox, FabButton, Form, TextInput, Item, Radio, ItemInputsGroup, Col, Row, FormTitle, Alert, SideAlert, Range, Select
} from "./flume/main";

const App: React.FC = ()=> {

    const 
        [alert_show, setAlertShow] = useState<boolean>(false),
        [side_alert_show, setSideAlertShow] = useState<boolean>(false);
    const
        [side_alert_timeout, setSideAlertTimeout] = useState<number>(3000),
        [side_alert_type, setSideAlertType] = useState<string>("default");

    return (
        <div className="app">

            <Alert
                is_open={ alert_show }
                setIsOpen={ setAlertShow }
                title="Alert title"
                buttons={ [
                    {
                        text: "Yes",
                        role: "close"
                    },
                    {
                        text: "No",
                        role: "destructive"
                    },
                    {
                        text: "Cancel",
                        role: "dismiss"
                    }
                ] }
            >
                hello
            </Alert>
            <SideAlert timeout={ side_alert_timeout } type={ side_alert_type } horizontal="end" vertical="bottom" is_open={ side_alert_show } setIsOpen={ setSideAlertShow }>
                Side alert
            </SideAlert>

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
                            <Button disabled={ true }>
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
                                <TextInput className="margin-bottom" disabled placeholder="hello" />
                                <Range className="margin-bottom" step="1" min="0" max="100" />
                                <Range step="1" min="0" max="100" disabled />
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

                    <Form className="margin-bottom" onSubmit={ e=> e.preventDefault() } width="400px" align="horizontal">
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
                            <TextInput type="number" />
                        </Item>
                        <Item row>
                            <Button priority concentration >
                                Register
                            </Button>
                            <Button fill="transparent">
                                Login
                            </Button>
                        </Item>
                    </Form>
                    
                    <Button className="margin-bottom" onClick={ ()=> setAlertShow(true) } concentration>
                        Show alert
                    </Button>
                    <Form width="400px" align="horizontal" onSubmit={ e=> e.preventDefault() }>
                        <FormTitle className="text-to-center">
                            Side alert params
                        </FormTitle>
                        <Item row>
                            <label>Timeout:</label>
                            <TextInput type="number" value={ side_alert_timeout } onChange={ e=> setSideAlertTimeout(+e.target.value) } />
                        </Item>
                        <Item row>
                            <label>Type:</label>
                            <Select
                                setSelect={ setSideAlertType }
                                options={ [
                                    { title: "Default", name: "default" },
                                    { title: "Error", color: "red", name: "error" },
                                    { title: "Success", color: "blue", name: "success" },
                                    { title: "Any", disabled: true, name: "any" },
                                ] }
                                default={ 0 }
                            />
                        </Item>
                        <Item>
                            <Button onClick={ ()=> setSideAlertShow(true) } concentration>
                                Show side alert
                            </Button>
                        </Item>
                    </Form>

                </Col>
            </Col>
        </div>
    );
}

export default App;
