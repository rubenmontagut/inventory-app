// import { useState } from 'react'
// import users from '../../data/users.json'

// export default function useAuth() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)

//   const login = async (email: string, password: string) => {
//     try {
//       // Buscar el usuario en la base de datos
//       const user = users.find((user) => user.email === email)

//       if (user) {
//         const storedPassword = user.password

//         // Comparar la contraseña proporcionada con la almacenada
//         const isPasswordCorrect = password === storedPassword

//         if (isPasswordCorrect) {
//           // Establecer isLoggedIn en true para indicar que el usuario ha iniciado sesión
//           setIsLoggedIn(true)
//           window.localStorage.setItem('isLoggedIn', 'true')
//         }
//       }
//     } catch (error) {
//       console.error('Error:', error)
//     }
//   }

//   const logout = () => {
//     // Establecer isLoggedIn en false para indicar que el usuario ha cerrado sesión
//     setIsLoggedIn(false)
//   }

//   return {
//     isLoggedIn,
//     login,
//     logout,
//   }
// }
