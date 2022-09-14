import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import TicketService from '../Service/TicketService'
import TicketRecord from './TicketRecord';

export default class ListTickets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tickets: [], errors: ''
        }
    }

    componentDidMount() {
        TicketService.getTickets()
            .then((res) => {
                this.setState({
                    tickets: res.data
                })
            }).catch((err) => {
                console.log(err);
                this.setState({
                    errors: "Some Error Occurred"
                })
            })
    }

    DataTable() {
        return this.state.tickets.map((res, i) => {
            return <TicketRecord obj={res} key={i} />
        })
    }

    render() {
        if (this.state.tickets != null) {
            return (
                <div>
                    <Table hover bordered striped>
                        <thead>
                            <tr style={{ textAlign: 'center' }}>
                                <th>Ticket ID</th>
                                <th>Employee ID</th>
                                <th>Problem Case</th>
                                <th>Resolved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.DataTable()}
                        </tbody>
                    </Table>
                </div>
            )
        }
        else {
            return <h1>{this.state.errors}</h1>
        }
    }
}
