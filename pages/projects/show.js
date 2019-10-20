import React, {Component} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import Layout from "../../components/Layout";
import Project from "../../ethereum/project";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/ContributeForm";

class ProjectShow extends Component {
    static async getInitialProps(props) {
        const project = Project(props.query.address);

        const summary = await project.methods.getSummary().call();

        return {
            address: props.query.address,
            projectGoal: summary[0],
            moneyRaised: summary[1],
            contributorsCount: summary[2],
            manager: summary[3]
        };
    }

    renderCards() {
        const {
            address,
            projectGoal,
            moneyRaised,
            contributorsCount,
            manager
        } = this.props;


        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description:
                    'The manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(projectGoal, 'ether'),
                meta: 'Goal of project',
                description: 'TOTAL MONEY TO BE RAISED',

                style: {overflowWrap: 'break-word'}
            },
            {
                header: contributorsCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(moneyRaised, 'ether'),
                meta: 'Campaign Balance (ether)',
                description:
                    'The balance is how much money this campaign has left to spend.'
            }
        ];


        return <Card.Group items = {items} />;
    }

    render() {
        return (
            <Layout>
                <h3>Project Details</h3>
                <Grid>
                    <Grid.Column width={10}>
                        {this.renderCards()}
                    </Grid.Column>

                    <Grid.Column width={6}>
                        <ContributeForm address={this.props.address}/>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

export default ProjectShow;