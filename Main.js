const BACKEND_URL = "http://192.168.100.100:5000"; // Ganti ke IP Termux kamu

let user_id = null;

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  user_id = urlParams.get("user_id");

  if (!user_id) {
    alert("User ID tidak ditemukan");
    return;
  }

  fetch(`${BACKEND_URL}/balance?user_id=${user_id}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("balance").innerText = `Balance: ${data.balance} BEX`;
    });
};

function mine() {
  fetch(`${BACKEND_URL}/mine?user_id=${user_id}`, {
    method: "POST"
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("balance").innerText = `Balance: ${data.new_balance} BEX`;
    });
}
