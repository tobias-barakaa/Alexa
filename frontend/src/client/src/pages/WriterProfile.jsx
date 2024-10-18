import { useParams } from 'react-router-dom'

const WriterProfile = () => {
    const {username} = useParams();
    console.log(username, 'username')
  return (
    <div>
      Writer Profile
    </div>
  )
}

export default WriterProfile
