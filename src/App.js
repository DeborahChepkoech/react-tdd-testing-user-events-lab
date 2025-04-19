import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  function handleCheckboxChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setInterests([...interests, value]);
    } else {
      setInterests(interests.filter((interest) => interest !== value));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Newsletter Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <fieldset>
          <legend>Select your interests:</legend>
          <label>
            <input
              type="checkbox"
              value="Coding"
              onChange={handleCheckboxChange}
              checked={interests.includes("Coding")}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              value="Design"
              onChange={handleCheckboxChange}
              checked={interests.includes("Design")}
            />
            Design
          </label>
          <label>
            <input
              type="checkbox"
              value="Marketing"
              onChange={handleCheckboxChange}
              checked={interests.includes("Marketing")}
            />
            Marketing
          </label>
        </fieldset>

        <button type="submit">Sign Up</button>
      </form>

      {submitted && (
        <div>
          <p>Thank you for signing up, {name}!</p>
          {interests.length > 0 && (
            <p>Your interests: {interests.join(", ")}</p>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
