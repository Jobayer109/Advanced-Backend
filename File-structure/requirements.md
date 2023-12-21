# Lottery API
- Sell lottery ticket.
- update lottery ticket.
- delete lottery ticket.
- get all lottery tickets.
- get ticket by ID.
- Bulk buy (user can buy multiple ticket at a time).
- Raffle draw.


# Ticket 
- number (unique)
- username
- price 
- timeStamps


# Routes
- /tickets/t/ticketId  -> GET     -> Find single ticket.
- /tickets/t/ticketId  -> PATCH   -> Update a ticket.
- /tickets/t/ticketId  -> DELETE  -> Delete a ticket.

- /tickets/u/username  -> GET     -> Get ticket by given name.
- /tickets/u/username  -> PATCH   -> Get ticket by given name.
- /tickets/u/username  -> DELETE  -> Get ticket by given name.

- /tickets/sell  -> Create a ticket.
- /tickets/bulk  -> Sell bulk tickets.
- /tickets       -> Find all tickets.
- /tickets/draw  -> Run the Raffle draw.
