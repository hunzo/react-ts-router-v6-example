import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom'
import { useAuth } from './authProvider'

const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protect Pages</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

const AuthStatus = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You Not Logon</p>
  }

  return (
    <p>
      Welcome {auth.user} !{' '}
      <button
        onClick={() => {
          auth.signout(() => navigate('/'))
        }}
      >
        Sign Out
      </button>
    </p>
  )
}

const RequiredAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth()
  const localtion = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: localtion }} />
  }

  return children
}

export { Layout, RequiredAuth, AuthStatus }
