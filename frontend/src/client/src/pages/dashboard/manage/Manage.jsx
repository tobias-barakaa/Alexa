import { useParams } from "react-router-dom";
import WorkRooms from "./WorkRooms";

const Manage = () => {

    const {id} = useParams();
 console.log('id', id);
  return (
    <div>
      <WorkRooms />
    </div>
  )
}

export default Manage
