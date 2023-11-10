import './App.css';
import users from "./users.json";

function App() {

  function renderUser() {
    return users.map((data) => (
      <div key={data.id} className="box">
        <p>{data.first_name}</p>
        <p>{data.last_name}</p>
        <img src={data.avatar} alt={data.first_name} />
        <p><span style={{color: data.gender === 'Female' ? 'red' : 'blue'}}>{data.gender === 'Female' ? data.gender : data.gender}</span></p>
      </div>
    ));
  }
  return (
    <div className="man">{renderUser()}</div>
  );
}

export default App;