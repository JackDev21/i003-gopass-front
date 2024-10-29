import { SystemError } from "com/errors"

import useContext from "../context/UseContext"
import { getAllTickets } from "../service/getAllTickets"

import { ticketStore } from "../store_zustand/tickets"

export const useGetAllTickets = () => {
  const { alert } = useContext()

  const getAllTicketsData = async (pageNumber: number, pageSize: number): Promise<void> => {
    try {
      const data = await getAllTickets(pageNumber, pageSize)
      ticketStore.getState().setTickets(data)
      console.log(data)
    } catch (error: any) {
      if (error instanceof SystemError) {
        alert(error.message)
      }
      alert(error.message)
    }
  }

  return { getAllTicketsData }
}
