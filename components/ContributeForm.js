import React, {Component} from 'react';
import {Form, Input, Message, Button} from "semantic-ui-react";
import Project from '../ethereum/project';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        error: '',
        loading:false
    };

    onSubmit = async event => {
        event.preventDefault();
        const project = Project(this.props.address);
        this.setState({loading:true});

        try {
            const accounts = await web3.eth.getAccounts();
            await project.methods.support().send({
               from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            }
            Router.replaceRoute(`/projects/${this.props.address}`)
        } catch (err) {
            this.setState({error: err.message})
        }


        this.setState({loading: false, value: ''});
    };

    render() {
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.error}>
                <Form.Field>
                    <label> Amount to Contribute</label>
                    <Input
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target.value })}
                        label="ether"
                        labelPosition="right"
                    />
                </Form.Field>
                <Message error header="OOPS!" content={this.state.error}/>

                <Button primary loading={this.state.loading}>
                    Contribute!
                </Button>
            </Form>
        )
    }
}

export default ContributeForm;