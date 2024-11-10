import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useReducer } from 'react';

// Reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'RESET':
      return { name: '', email: '', password: '' };
    default:
      return state;
  }
};

function Estate() {
  const initialState = { name: '', email: '', password: '' };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log({
      name: state.name,
      email: state.email,
      password: state.password,
    });

    // Reset input fields after submission
    dispatch({ type: 'RESET' });
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={state.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Estate;
