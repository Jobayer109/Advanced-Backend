const Ticket = require("../models/Ticket");
const ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }
  // -------------------------------------------------------
  /**
   * Create a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} Return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  // -------------------------------------------------------

  /**
   * Create multiple tickets
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  // -------------------------------------------------------

  // Get all tickets
  find() {
    return this.tickets;
  }

  // -------------------------------------------------------
  /**
   *
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const tickets = this.tickets.find(
      /**
       * Get single ticket
       * @param {Ticket} ticket
       */
      (ticket) => ticket.id === ticketId
    );

    return tickets;
  }

  // -------------------------------------------------------
  /**
   *
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       *
       * @param {Ticket} ticket
       * @returns
       */
      (ticket) => ticket.username === username
    );

    return tickets;
  }

  // -------------------------------------------------------

  /**
   * Update ticket
   * @param {string} ticketId
   * @param {{username: string, price: number}} ticketBody
   */
  update(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username;
    ticket.price = ticketBody.price;
    ticket.updatedAt = new Date();

    return ticket;
  }

  // -------------------------------------------------------

  /**
   * Delete ticket
   * @param {string} ticketId
   */
  delete(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);

    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  // -------------------------------------------------------

  /**
   * Get winners
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    let winnerIndexes = new Array(winnerCount);
    let index = 0;
    while (index < winnerCount) {
      let winnerIndex = Math.floor(Math.random() * this.tickets.length);
      console.log("Winner index", winnerIndex);

      if (!winnerIndexes.includes(winnerIndex)) {
        winnerIndexes[index++] = winnerIndex;
        continue;
      }
    }
    const winners = winnerIndexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();
module.exports = myDB;
