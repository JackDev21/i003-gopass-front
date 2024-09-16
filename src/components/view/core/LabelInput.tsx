import { Link } from "react-router-dom"
import { useState } from "react"
import Button from "../../core/Button/Button"

export default function LabelInput() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target
    const password: string = target.value

    setPassword(password)
  }

  return (
    <>
      <div className="w- flex flex-col gap-5 rounded-2xl bg-[#e0e0e0e2] p-3">
        <h1 className="text-center text-2xl font-bold">Inicia sesión</h1>
        <label className="input flex items-center gap-2 bg-customWhite">
          <input type="text" className="grow" placeholder="Email" id="email" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-7 w-7 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
        </label>

        <label className="input flex items-center gap-2 bg-customWhite">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            className="grow"
            onChange={handlePasswordChange}
          />
          <svg
            onClick={togglePasswordVisibility}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 cursor-pointer opacity-70"
          >
            {showPassword ? (
              <path d="M12 4.5C7.305 4.5 3.27 7.288 1.5 12c1.77 4.712 5.805 7.5 10.5 7.5s8.73-2.788 10.5-7.5c-1.77-4.712-5.805-7.5-10.5-7.5zm0 13c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5 4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
            ) : (
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            )}
          </svg>
        </label>
        <Link className="underline" to="">
          ¿Olvidaste la constraseña?
        </Link>
        <Button className="bg-black text-white hover:bg-customRed hover:text-black">Iniciar sesión</Button>
        <p>
          ¿Aún no tienes cuenta?{" "}
          <a className="font-bold underline" href="#">
            Regístrate
          </a>
        </p>
      </div>
    </>
  )
}
