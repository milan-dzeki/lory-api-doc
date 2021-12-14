import React from 'react';

function App() {
  return (
    <>
      <header>
        Lory API
      </header>
      <main>
        {/* section */}
        <section>
          <h2>
            authentication/users
          </h2>
          <p className="url">
            base url: <strong>/api/users</strong>
          </p>
          <p className="endpoint">endpoints:</p>
          <ul>
            <li>
              1. <strong>/</strong> ---- gets all users from db
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              2. <strong>/register</strong> ---- creates/registers new user
              <br />
              <br />
              <span>method:</span> POST
              <br />
              <br />
              <span>recieves:</span> first name, last name, phone, email, password
              <br />
              <br />
              <span>saves to DB:</span> firstName, lastName, email, phone, password(hashed), fullName, isAdmin(initially false), isTandem(initially null), companyId(initially null), vehicleId(initially null), createdAt
              <br />
              <br />
              <span>applied middlewares:</span> <strong>checkUser</strong> ---- checks if user email already exists in DB
              <br />
              <br />
              <hr />
            </li>
            <li>
              3. <strong>/login</strong> ---- logs user in
              <br />
              <br />
              <span>method:</span> POST
              <br />
              <br />
              <span>recieves:</span>  email, password
              <br />
              <br />
              signs JWT which is send to client
              <br />
              <br />
              <span>applied middlewares:</span> <strong>checkLogin</strong> ---- checks if user is already logged in
            </li>
          </ul>
        </section>
        {/* section */}
        <section>
          <h2>
            user data
          </h2>
          <p className="url">
            base url: <strong>/api/user-data</strong>
          </p>
          <p className="endpoint">endpoints:</p>
          <ul>
            <li>
              1. <strong>/all</strong> ---- gets all data for all users from DB
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              2. <strong>/:id</strong> -- gets all data for particular user
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              3. <strong>/</strong> --- adds new data to userData collection
              <br />
              <br />
              <span>method:</span> POST
            </li>
          </ul>
        </section>
        {/* section */}
        <section>
          <h2>
            vehicles
          </h2>
          <p className="url">
            base url: <strong>/api/vehicles</strong>
          </p>
          <p className="endpoint">endpoints:</p>
          <ul>
            <li>
              1. <strong>/</strong> ---- gets all vehicles from DB
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              2. <strong>/add</strong> ---- creates new vehicle
              <br />
              <br />
              <span>method:</span> POST
              <br />
              <br />
              <span>recieves:</span>  name, licensePlate, description
              <br />
              <br />
              <span>saves to DB:</span> name, licensePlate, description, createData, hasDriver(initially false), idPair(initially false), idTandem(initially false), deviceID(initially null)
              <br />
              <br />
              <span>applied middlewares:</span> <strong>checkIfExists</strong> ---- checks if vehicle aready exists
              <br />
              <br />
              <hr />
            </li>
            <li>
              3. <strong>/edit/:id</strong> --- edits properties for particular vehicle
              <br />
              <br />
              <span>method:</span> POST
              <br />
              <br />
              <hr />
            </li>
            <li>
              4. <strong>/devices</strong> ---- gets devices for vehicles
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              5. <strong>/device/:id</strong> --- gets particular device
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              6. <strong>/pair/:id</strong> ---- pairs particular vehicle with tracking device
              <br />
              <br />
              <span>method:</span> POST
              <br />
              <br />
              <span>applied middlewares:</span> <strong>getDevice</strong> ---- gets device to be connected with vehicle
            </li>
          </ul>
        </section>
        {/* section */}
        <section>
          <h2>
            drivers
          </h2>
          <p className="url">
            base url: <strong>/api/drivers</strong>
          </p>
          <p className="endpoint">endpoints:</p>
          <ul>
            <li>
              1. <strong>/</strong> ---- gets all drivers from DB
              <br />
              <br />
              <span>method:</span> GET
              <br />
              <br />
              <hr />
            </li>
            <li>
              2. <strong>/add</strong> ---- creates/adds new driver to DB
              <br />
              <br />
              <span>method:</span> POST
              <br />
              <br />
              <span>recieves:</span>  firstName, lastName, email, vehicle, password, confirmPassword, description
              saves to DB: firstName, lastName, email, vehicle, password(hashed), description
              <br />
              <br />
              <span>applied middlewares:</span> <strong>checkIfExists</strong> ---- check if driver with provided email alreeady exists in DB
              <br />
              <br />
              <hr />
            </li>
            <li>
              3. <strong>/delete/:id</strong> ---- removes driver from DB
              <br />
              <br />
              <span>method:</span> DELETE
              <br />
              <br />
              <hr />
            </li>
            <li>
              3. <strong>/edit/:id</strong> ---- edit certain driver's properties
              <br />
              <br />
              <span>method:</span> PUT
            </li>
          </ul>
        </section>
         {/* section */}
        <section>
          <h2>
            tandem driver
          </h2>
          <p className="url">
            base url: <strong>/api/tandem-driver</strong>
          </p>
          <p className="endpoint">endpoints:</p>
          <ul>
            <li>
              1. <strong>/</strong> ---- gets all tandem drivers from DB
              <br />
              <br />
              <span>method:</span> GET
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
