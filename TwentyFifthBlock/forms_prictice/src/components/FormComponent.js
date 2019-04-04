import React from 'react';

function FormComponent(props) {
  return (
    <main>
      <form>
        <label>First name: </label>
        <input
          type="text"
          name="firstName"
          value={props.firstName}
          placeholder="First Name"
          onChange={props.onChangeHandler}
        />
        <br />
        <label>Last name: </label>
        <input
          type="text"
          name="lastName"
          value={props.lastName}
          placeholder="Last Name"
          onChange={props.onChangeHandler}
        />
        <br />
        <label>Age: </label>
        <input
          type="text"
          name="age"
          value={props.age}
          placeholder="Age"
          onChange={props.onChangeHandler}
        />
        <br />

        {/* Create radio buttons for gender here */}
        <label>Gender: </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.onChangeHandler}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.onChangeHandler}
          />
          Female
        </label>
        <br />

        {/* Create select box for location here */}
        <label>Location: </label>
        <select
          value={props.destination}
          name="destination"
          onChange={props.onChangeHandler}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Berlin">Berlin</option>
          <option value="London">London</option>
          <option value="Moscow">Moscow</option>
          <option value="Rome">Rome</option>
          <option value="Washington">Washington</option>
          <option value="Madrid">Madrid</option>
        </select>
        <br />

        {/* Create check boxes for dietary restrictions here */}
        <label>Dietary restrictions: </label>
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={props.isVegan}
            onChange={props.onChangeHandler}
          />
          Vegan
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.isKosher}
            onChange={props.onChangeHandler}
          />
          Kosher
        </label>
        <label>
          <input
            type="checkbox"
            name="isLactoseFree"
            checked={props.isLactoseFree}
            onChange={props.onChangeHandler}
          />
          Lactose Free
        </label>
        <br />

        <button>Submit</button>
      </form>
      <hr />
      <h2>Entered information:</h2>
      <p>Your name: {props.firstName + " " + props.lastName}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <p>
        Your dietary restrictions:
        {props.isVegan ? " Vegan" : ""}
        {props.isKosher ? " Kosher" : ""}
        {props.isLactoseFree ? " Lactose Free" : ""}
      </p>
    </main>
  );
}

export default FormComponent;
