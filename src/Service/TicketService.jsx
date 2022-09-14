import axios from "axios";
const DBURL = "http://localhost:8080/api2/v1";

class TicketService{
    getTickets()
    {
        return axios.get(DBURL+'/getall');
    }

    deleteTicket(ticketID)
    {
        return axios.delete(DBURL+"/delete/"+ticketID)
    }

}

export default new TicketService();