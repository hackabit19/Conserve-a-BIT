import React, {Component} from 'react';
import generator from '../ethereum/generator'
import {Card, Button} from 'semantic-ui-react';
import Layout from "../components/Layout";

class ProjectIndex extends Component {

    static async getInitialProps() {
        const projects = await generator.methods.AllProjects().call();
        return { projects };
    }

    renderProjects() {
        const items = this.props.projects.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });
        return <Card.Group items={items}/>;
    }



    render () {
        return (
            <Layout>
            <div>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <h3>Open Projects</h3>

            <Button
                floated = "right"
                content = "Create Project"
                icon = "add circle"
                primary = {true}
            />
             {this.renderProjects()}
        </div>
            </Layout>
        );
    }
}

export default ProjectIndex;