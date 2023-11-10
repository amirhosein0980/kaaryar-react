import './App.css';
import users from './users.json';

function App() {
  function renderUser() {
    return users.map((data) => (
      <form key={data.id}>
        <label><h2>{data.label}</h2></label>
        {data.type === 'select' ? (
          <select name={data.name} id={data.id} required={data.required}>
            {data.options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        ) : (
          <input type={data.type} placeholder={data.placeholder} required={data.required} />
        )}
        {data.type === "radio" ? (<div>
            {data.options.map((option) => (
              <div key={option.value}>
                <input type="radio" name={data.name}/>
                <label>{option.label}</label>
              </div>
            ))}
          </div>) : null}
      </form>
    ));
  }
  return (
    <div>{renderUser()}</div>
  );
}

export default App;