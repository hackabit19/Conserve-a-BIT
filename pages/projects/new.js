import React, { Component } from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import generator from '../../ethereum/generator';
import web3 from '../../ethereum/web3';

class ProjectNew extends Component {
    state = {
        goal: '',
        description: '',
        name: '',
        deadline: '',
        errormsg: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading : true, errormsg: ''});
        try {
            const accounts = await web3.eth.getAccounts();

            await generator.methods.createProject(this.state.name, this.state.deadline, this.state.description, this.state.goal)
                .send({
                    from: accounts[0]
                });
        }
        catch (err) {
            this.setState({errormsg: err.message});
        }

        this.setState({loading: false});
    };


    render() {
        return (
            <Layout>
                <h3>Create a Campaign!</h3>
            <Form onSubmit = {this.onSubmit} error={this.state.errormsg}>
                <Form.Field>
                    <label>Goal</label>
                    <Input
                        label="wei"
                        labelPosition="right"
                        value = {this.state.goal}
                        onChange={event =>
                            this.setState({goal: event.target.value})
                }/>

                </Form.Field>

                <Form.Field>
                    <label>Description</label>
                    <Input
                        labelPosition="right"
                        value = {this.state.description}
                        onChange={event =>
                            this.setState({description: event.target.value})
                        }/>

                </Form.Field>


                <Form.Field>
                <label>Name</label>
                <Input
                    labelPosition="right"
                    value = {this.state.name}
                    onChange={event =>
                        this.setState({name: event.target.value})
                    }/>
                </Form.Field>


                <Form.Field>
                    <label>Deadline</label>
                    <Input
                        label="days"
                        labelPosition="right"
                        value = {this.state.deadline}
                        onChange={event =>
                            this.setState({deadline: event.target.value})
                        }/>
                </Form.Field>

                <Message error header = "Ooops!" content = {this.state.errormsg} />
                <Button loading = {this.state.loading} primary>Create!</Button>
            </Form>
            </Layout>
        );
    }
}

export default ProjectNew;