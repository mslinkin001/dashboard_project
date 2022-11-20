export const AuthForm = async (props) => {
  let url =
    "https://parseapi.back4app.com/classes/teacher_table" +
    `?where={ "firstName": "${props}"}`;
  console.log(url);
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Parse-Application-Id": "aKMa1c8X90GamXful5ecFAl1qbyM2gjXLLamVEr5",
      "X-Parse-REST-API-Key": "Vpu1GAUIZomXVeMKBm9sLZn6PlG4i5lSyFVqeBMF",
    },
  }).then((res) => {
    if (res.ok) {
      const result = res.json();
      return result;
    } else {
      return res.json().then((data) => {
        let errorMessage = "Authentication failed!";
        throw new Error(errorMessage);
      });
    }
  });
  // .then((data) => {
  //   // console.log(data.results[0].objectId);
  //   return data.results;
  // })
  // .catch((err) => {
  //   alert(err.message);
  // });
};
