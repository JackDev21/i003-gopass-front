import { create } from "zustand"

import { Ticket } from "../types"

interface State {
  tickets: Ticket[]
  setTickets: (tickets: Ticket[]) => void

  ticket?: Ticket
  selectedTicket: Ticket | null
  setSelectedTicket: (ticket: Ticket) => void
}

export const ticketStore = create<State>((set) => ({
  tickets: [] as Ticket[],
  ticket: {} as Ticket,
  selectedTicket: {} as Ticket,

  setTickets: (tickets: Ticket[]) => set({ tickets }),

  setSelectedTicket: (ticket: Ticket) => set({ selectedTicket: ticket }),
}))
