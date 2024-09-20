import Avatar from "../Avatar"
import { IoSettingsOutline } from "react-icons/io5"
import { IoTicketOutline } from "react-icons/io5"
import { LuBadgePercent } from "react-icons/lu"
import { MdOutlineVerifiedUser } from "react-icons/md"

export default function SideBarMenu() {
  return (
    <div className="fixed inset-0 flex items-start justify-start bg-black bg-opacity-50">
      <div className="w-1/2 rounded-r-lg bg-gradient-to-r from-black to-gray-800 p-2 pb-14 text-customWhite">
        <div className="flex flex-col items-center gap-4">
          <Avatar />
          <h2 className="font-azonix">FRANCO</h2>
          <p>franquito@email.com</p>
          <hr className="w-full border-2" />
          <div>
            <ul className="my-2 flex flex-col gap-5">
              <li className="flex items-center gap-2">
                <IoSettingsOutline />
                Mi Cuenta
              </li>
              <li className="flex items-center gap-2">
                <IoTicketOutline />
                Entradas
              </li>
              <li className="flex items-center gap-2">
                <LuBadgePercent />
                Revender
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineVerifiedUser />
                Verificar
              </li>
            </ul>
          </div>
          <hr className="w-full border-2" />
          <div>
            <ul className="flex flex-col gap-5 pt-5 text-center">
              <li>Help & Support</li>
              <li>About Us</li>
              <li>Sign Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
