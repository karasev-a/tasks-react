import React, { Component } from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';


export default class Register extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        validate: {
            emailState: '',
        },
        // emailValid: false,
        // firstNameValid: false,
        // lastNameValid: false,
        // phoneValid: false

    }
    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    handleChange = async (event) => {
        const { target } = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const { name } = target;
        await this.setState({
            [name]: value,
        });
    }
    submitForm(e) {
        e.preventDefault();
        console.log(`Email: ${this.state.email}`)
    }
    validateForm() {
        return this.state.validate.emailState === 'has-success' && this.state.password.length > 0;
    }
    validateEmail(e) {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const { validate } = this.state
        if (emailRex.test(e.target.value)) {
            validate.emailState = 'has-success'
        } else {
            validate.emailState = 'has-danger'
        }
        this.setState({ validate })
    }
    valida

    render() {
        const { email, password, firstName, lastName, phone } = this.state;
        return (
            <Container >
                <h2>Sign In</h2>
                <Form className="form" onSubmit={(e) => this.submitForm(e)}>
                    <Col>
                        <FormGroup>
                            <Label>First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                id="fname"
                                placeholder="Enter name"
                                value={firstName}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                        <FormGroup>
                            <Label>Last Name</Label>
                            <Input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Enter name"
                                value={lastName}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                value={email}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.validateEmail(e)
                                    this.handleChange(e)
                                }}
                            />
                            <FormFeedback valid>
                                That's a tasty looking email you've got there.
              </FormFeedback>
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your email. Please input a correct email.
              </FormFeedback>
                            <FormText>Your username is most likely your email.</FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                value={password}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Phone</Label>
                            <Input
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter name"
                                value={phone}
                                valid={this.state.validate.emailState === 'has-success'}
                                invalid={this.state.validate.emailState === 'has-danger'}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }}
                            />
                        </FormGroup>
                    </Col>
                    <Button
                        color="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Submit
          </Button>
                </Form>
            </Container>
        );
    }

};