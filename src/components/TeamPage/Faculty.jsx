import { useEffect, useState } from "react";
import axios from "axios";

const Faculty = () => {
  const [Faculty, setFaculty] = useState([]);

  const getFaculty = async () => {
    const res = await axios.get("https://djacmdev.pythonanywhere.com/api/faculty/");
    const data = res.data;
    setFaculty(data);
  };

  useEffect(() => {
    getFaculty();
  }, []);

  return (
    <div className='faculty'>
      {Faculty.map(x => (
        <FacultyMember img={x.pic} name={x.name} position={x.post} />
      ))}
    </div>
  );
};

const FacultyMember = ({ name, img, position }) => {
  return (
    <div className='faculty-member'>
      <img className='faculty-img' src={img} alt={name} />
      <div className='divider' />
      <h2 className='faculty-name'>{name}</h2>
      <h3 className='faculty-position'>{position}</h3>
    </div>
  );
};

export default Faculty;
