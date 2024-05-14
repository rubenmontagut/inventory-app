import { useAuth } from './useAuth'
import users from '../../data/users.json'

export default function useUser() {
  const { user } = useAuth()

  const getUserInfo = () => {
    const userName = users.find((u) => u.email === user)?.name
    const userLastName = users.find((u) => u.email === user)?.lastName
    const userImage = users.find((u) => u.email === user)?.image
    return { userName, userLastName, userImage }
  }

  return { getUserInfo }
}
