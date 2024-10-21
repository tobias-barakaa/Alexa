import { useParams } from "react-router-dom";

const Manage = () => {

    const {id} = useParams();
 console.log('id', id);
  return (
    <div>
      Manage jsx
    </div>
  )
}

export default Manage
