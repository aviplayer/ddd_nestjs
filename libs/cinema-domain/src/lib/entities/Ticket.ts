import Session from "./Session";
import {TicketId, Cost} from "../values";

export default class Ticket {
  id: TicketId;
  cost: Cost;
  session: Session;
  isSold: boolean;
}

