import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_ADMIN } from '../../../utils/constant/data'

export default function IndexAdmin() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem(TOKEN_ADMIN)) {
      navigate('/login', { replace: true })
    }
  }, [])
  
  return (
    <div>indexAdmin</div>
  )
}
