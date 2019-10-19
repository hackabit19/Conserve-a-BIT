import React, {Component} from 'react';
import Layout from "../../components/Layout";

class ProjectShow extends Component {
    static async getInitialProps(props) {
        console.log(props.query.address);
        return {};
    }

    render() {
        return (
            <Layout>
                <h3>Project Show</h3>
            </Layout>
        );
    }
}

export default ProjectShow;