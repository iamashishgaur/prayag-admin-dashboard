const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
app.use(express.json(), express.urlencoded(), cors());
const dataSet = {
  ashish: {
    isAdmin: true,
    password: "1234",
    isLoggedIn: false,
  },
  alok: {
    isAdmin: false,
    password: "1234",
    isLoggedIn: false,
  },
};

// function getStats(isAdmin, userName) {
//     if (isAdmin)
//         return {
//             backlog: tableData.filter((x) => x.status === 0).length,
//             inProgress: tableData.filter((x) => x.status === 1).length,
//             complete: tableData.filter((x) => x.status === 2).length,
//             closed: tableData.filter((x) => x.status === 3).length,
//         };
//     else
//         return {
//             backlog: tableData.filter(
//                 (x) => x.status === 0 && x.owner === userName
//             ).length,
//             inProgress: tableData.filter(
//                 (x) => x.status === 1 && x.owner === userName
//             ).length,
//             complete: tableData.filter(
//                 (x) => x.status === 2 && x.owner === userName
//             ).length,
//             closed: tableData.filter(
//                 (x) => x.status === 3 && x.owner === userName
//             ).length,
//         };
// }

app.post("/authenticateUser", (req, res) => {
  const req_UserName = req.body.userName || "";
  const req_Password = req.body.password || "";

  if (dataSet.hasOwnProperty(req_UserName)) {
    // check for the user's password
    if (dataSet[req_UserName].password === req_Password) {
      dataSet[req_UserName].isLoggedIn = true;
      res.send({
        isAuthenticated: true,
        message: "Ok",
        isAdmin: dataSet[req_UserName].isAdmin,
      });
    } else
      res.send({
        isAdmin: false,
        isAuthenticated: false,
        message: "username or password is incorrect",
      });
  } else
    res.send({
      isAdmin: false,
      isAuthenticated: false,
      message: "User doesn't exist, please create an account",
    });
});
app.post("/registerUser", (req, res) => {
  const req_UserName = req.body.userName || "";
  const req_Password = req.body.password || "";

  // extending the dataset
  dataSet[req_UserName] = {
    password: req_Password,
  };
  console.log(dataSet);
  res.send({ isRegistered: true });
});
app.post("/checkUserExists", (req, res) => {
  const req_UserName = req.body.userName || "";

  if (dataSet.hasOwnProperty(req_UserName)) {
    res.send({ isExistingUser: true });
  } else res.send({ isExistingUser: false });
});
app.get("/checkSession", (req, res) => {
  const req_UserName = req.query.usrn || "";
  console.log("asdfasdfasdf", req_UserName);

  if (!!req_UserName && dataSet[req_UserName]?.isLoggedIn === true) {
    res.send({ isAuthenticated: true, message: "Ok" });
  } else {
    res.send({
      isAuthenticated: true,
      message: "Ok",
      redirectUrl: "/login",
    });
  }
});
app.listen(port, () => {
  console.log("app server is live on port:", port);
});
