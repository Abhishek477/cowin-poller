let states = {};
let districts = {};

const extract = () => {
  const statesList = document.querySelector("#states");
  const districtsList = document.querySelector("#districts");

  fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
    .then((res) => res.json())
    .then((data) => {
      data.states.forEach((s) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${s.state_id}</td><td>${s.state_name}</td>`;
        statesList.appendChild(tr);

        if (true || s.state_id < 3) {
          fetch(
            `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${s.state_id}`
          )
            .then((res) => res.json())
            .then((data) => {
              data.districts.forEach((d) => {
                let tr = document.createElement("tr");
                tr.innerHTML = `<td>${d.district_id}</td><td>${d.district_name}</td>`;
                districtsList.appendChild(tr);
              });
            });
        }
      });
    });
};

extract();
