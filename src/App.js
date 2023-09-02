import { useState } from "react";
import "./App.css";
import { validateEmail } from "./utils";

//C- Form
const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

//Advanced React List Map to tranform or filter list
const topDesserts = [
  {
    title: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    title: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    title: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    title: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  //Advanced React List Map
  const listItems = topDesserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.calories}`;
    return <li>{itemText}</li>;
  });

  //A- Forms
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
  };

  //B- Form
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment explaining why the experience was poor");
      return;
    }
    console.log("Form submitted");
    setComment("");
    setScore("10");
  };

  //C- Form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubm = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <>
      {/* Advanced React List Map to tranform or filter list */}
      <div>
        <ul>{listItems}</ul>
      </div>

      {/* A- Form in react using onChange and value and onSubmit -----------------------------------------------------*/}
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="Field">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <br></br>
            <button disabled={!name} type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
      {/* B- Form --------------------------------------------------------------------- */}
      <div className="App">
        <form onSubmit={handleSub}>
          <fieldset>
            <h2>Feedback form</h2>
            <div className="Field">
              <label>Score: {score} ⭐ </label>
              <br></br>
              <input
                type="range"
                min="0"
                max="10"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              ></input>
            </div>
            <br></br>
            <div className="Field">
              <label>Comment: </label>
              <br></br>
              <textarea
                placeholder="Enter a comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <br></br>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
      <br></br>

      {/* C- Form --------------------------------------------------------------------------------- */}

      <div className="App">
        <form onSubmit={handleSubm}>
          <fieldset>
            <h2>Sign Up</h2>
            <div className="Field">
              <label>
                First name <sup>*</sup>
              </label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First name"
              />
            </div>
            <div className="Field">
              <label>Last name</label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last name"
              />
            </div>
            <div className="Field">
              <label>
                Email address <sup>*</sup>
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email address"
              />
            </div>
            <div className="Field">
              <label>
                Password <sup>*</sup>
              </label>
              <input
                value={password.value}
                type="password"
                onChange={(e) => {
                  setPassword({ ...password, value: e.target.value });
                }}
                onBlur={() => {
                  setPassword({ ...password, isTouched: true });
                }}
                placeholder="Password"
              />
              {password.isTouched && password.value.length < 8 ? (
                <PasswordErrorMessage />
              ) : null}
            </div>
            <div className="Field">
              <label>
                Role <sup>*</sup>
              </label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <button type="submit" disabled={!getIsFormValid()}>
              Create account
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default App;
