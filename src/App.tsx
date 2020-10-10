import React, { useState } from "react";
import "./stl.scss";
//
import {
    Button, Checkbox, FabButton, Form, TextInput, Item, Radio, ItemInputsGroup, Col, Row, FormTitle, Alert, SideAlert, Range, Select, Card, CardTitle, CardHeader, CardSubtitle, CardContent
} from "./flume/core";

const App: React.FC = ()=> {

    const 
        [alert_show, setAlertShow] = useState<boolean>(false),
        [side_alert_show, setSideAlertShow] = useState<boolean>(false);
    const
        [side_alert_timeout, setSideAlertTimeout] = useState<number>(3000),
        [side_alert_type, setSideAlertType] = useState<any>("default"),
        [side_alert_horizontal, setSideAlertHorizontal] = useState<any>("default"),
        [side_alert_vertical, setSideAlertVertical] = useState<any>("default");

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
            <SideAlert timeout={ side_alert_timeout } type={ side_alert_type } horizontal={ side_alert_horizontal } vertical={ side_alert_vertical } is_open={ side_alert_show } setIsOpen={ setSideAlertShow }>
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
                                <TextInput concentration="c" placeholder="hello" />
                                <TextInput className="margin-bottom" disabled placeholder="hello" />
                                <Range className="margin-bottom" step="1" min="0" max="100" />
                                <Range step="1" min="0" max="100" disabled />
                            </Col>
                            <Col>
                                <Row>
                                    <Item row="r">
                                        <label>
                                            Yes
                                        </label>
                                        <Checkbox />
                                    </Item>
                                    <Item row="r">
                                        <label>
                                            Yes
                                        </label>
                                        <Checkbox concentration="c" />
                                    </Item>
                                    <Item row="r">
                                        <label>
                                            No
                                        </label>
                                        <Checkbox checked disabled />
                                    </Item>
                                    <Item row="r">
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
                        <Item row="r">
                            <label>Your age:</label>
                            <TextInput type="number" />
                        </Item>
                        <Item row="r">
                            <Button priority="p" concentration="c" >
                                Register
                            </Button>
                            <Button fill="transparent">
                                Login
                            </Button>
                        </Item>
                    </Form>
                    
                    <Button className="margin-bottom" onClick={ ()=> setAlertShow(true) } concentration="c">
                        Show alert
                    </Button>
                    <Form width="400px" align="horizontal" className="margin-bottom" onSubmit={ e=> e.preventDefault() }>
                        <FormTitle className="text-to-center">
                            Side alert params
                        </FormTitle>
                        <Item row="r">
                            <label>Timeout:</label>
                            <TextInput type="number" value={ side_alert_timeout } onChange={ e=> setSideAlertTimeout(+e.target.value) } />
                        </Item>
                        <Item row="r">
                            <label>Horizontal:</label>
                            <Select
                                fill="transparent"
                                setSelect={ setSideAlertHorizontal }
                                options={ [
                                    { title: "Start", value: "start" },
                                    { title: "Center", value: "center" },
                                    { title: "End", value: "end" },
                                    { title: "In world's ass", disabled: true, value: "any" },
                                ] }
                                default={ 2 }
                            />
                        </Item>
                        <Item row="r">
                            <label>Vertical:</label>
                            <Select
                                fill="transparent"
                                setSelect={ setSideAlertVertical }
                                options={ [
                                    { title: "Top", value: "top" },
                                    { title: "Center", value: "center" },
                                    { title: "Bottom", value: "bottom" },
                                    { title: "In world's ass", disabled: true, value: "any" },
                                ] }
                                default={ 2 }
                            />
                        </Item>
                        <Item row="r">
                            <label>Type:</label>
                            <Select
                                fill="transparent"
                                setSelect={ setSideAlertType }
                                options={ [
                                    { title: "Default", value: "default" },
                                    { title: "Error", color: "red", value: "error" },
                                    { title: "Success", color: "blue", value: "success" },
                                    { title: "Any", disabled: true, value: "any" },
                                ] }
                                default={ 0 }
                            />
                        </Item>
                        <Item>
                            <Button onClick={ ()=> setSideAlertShow(true) } concentration="c">
                                Show side alert
                            </Button>
                        </Item>
                    </Form>

                    <Row>
                        
                        <Card width="300px">
                            <CardHeader>
                                <span>
                                    <CardTitle>
                                        Card default
                                    </CardTitle>
                                    <CardSubtitle>
                                        Card subtitle
                                    </CardSubtitle>
                                </span>
                            </CardHeader>
                            <CardContent>
                                Card content
                            </CardContent>
                        </Card>
                        <Card width="300px" color="error">
                            <CardHeader>
                                <span>
                                    <CardTitle>
                                        Card error
                                    </CardTitle>
                                    <CardSubtitle>
                                        Card subtitle
                                    </CardSubtitle>
                                </span>
                            </CardHeader>
                            <CardContent>
                                Card content
                            </CardContent>
                        </Card>
                        <Card width="300px" color="success">
                            <CardHeader>
                                <span>
                                    <CardTitle>
                                        Card cuccess
                                    </CardTitle>
                                    <CardSubtitle>
                                        Card subtitle
                                    </CardSubtitle>
                                </span>
                            </CardHeader>
                            <CardContent>
                                Card content
                            </CardContent>
                        </Card>
                        <Card width="300px" color="transparent">
                            <CardHeader>
                                <span>
                                    <CardTitle>
                                        Card transparent
                                    </CardTitle>
                                    <CardSubtitle>
                                        Card subtitle
                                    </CardSubtitle>
                                </span>
                            </CardHeader>
                            <CardContent>
                                Card content
                            </CardContent>
                        </Card>

                    </Row>

                </Col>
            </Col>
        </div>
    );
}

export default App;
