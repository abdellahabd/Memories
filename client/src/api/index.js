const url = "http://localhost:5000/postes";
export const fetchPostes = async () => {
  try {
    const data = await fetch("http://localhost:5000/postes");
    const result = await data.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const Poste = (poste) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(poste),
  })
    .then((data) => {
      return data.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
