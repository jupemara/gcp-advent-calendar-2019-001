export const index = `
<html>
<head>
<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-firestore.js"></script>
<script type="text/javascript">
// Fill in all of values
const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
}, endpoint = "PLEASE-REPLACE-YOUR-ENDPOINT",
  watchUserId = 'test-userid-001';
firebase.initializeApp(coonfig);
firebase.firestore()
  .collection("user")
  .doc(watchUserId)
  .onSnapshot(function(doc) {
    if (!!doc.data()) {
      document.querySelector("#space").textContent = "Registered user id: " + JSON.stringify(doc.data(), null, 2);
    }
  });
async function onClick() {
  const userId = document.querySelector('#userId').value;
  await fetch(
    endpoint,
    {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "userId": userId,
      })
    },
  )
}
</script>
</head>
<body>
<h1>2019 GCP Advent Calendarのテスト用UIです</h1>
<form>
<label for="userId">UserId</label>
<input id="userId" type="text" name="userId">
<button type="button" onclick="onClick()">Register User!</button>
</form>
<div id="space"></div>
</body>
</html>
`;
