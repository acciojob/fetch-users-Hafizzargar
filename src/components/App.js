import "regenerator-runtime/runtime";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import "./../styles/App.css";

const App = () => {
  const [data, setdata] = useState([]);
  const [t, sett] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get("https://reqres.in/api/users");
        console.log(response.data.data); // Axios returns the data inside 'data'
        setdata(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  function abc() {
    sett(!t);
  }

  return (
    <div>
      <div>
        <h1>Blue Whales</h1>
        <button onClick={abc}> Get User List</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        {t ? (
          <tbody>
            {data.map((e) => {
              return (
                <tr key={e.id}>
                  <td>{e.first_name}</td>
                  <td>{e.last_name}</td>
                  <td>{e.email}</td>
                  <td>
                    <img src={e.avatar} alt="avatar" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <div>no data found</div>
        )}
      </table>
    </div>
  );
};

export default App;
