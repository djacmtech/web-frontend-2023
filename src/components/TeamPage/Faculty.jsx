import useData from "../../hooks/useData";

const Faculty = () => {
  const Faculty = useData("https://djacmdev.pythonanywhere.com/api/faculty/");

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
