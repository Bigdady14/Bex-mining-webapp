
const userId = "123"; // Ganti sesuai user ID Telegram
const apiUrl = "http://127.0.0.1:5000"; // Ganti jika hosting berbeda

async function getBalance() {
  const res = await fetch(`${apiUrl}/balance?user_id=${userId}`);
  const data = await res.json();
  document.getElementById("balance").innerText = `${data.balance} BEX`;
}

async function tapMine() {
  const res = await fetch(`${apiUrl}/mine`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id: userId })
  });
  const data = await res.json();
  document.getElementById("balance").innerText = `${data.balance} BEX`;
}

document.getElementById("tapButton").addEventListener("click", tapMine);
window.onload = getBalance;

document.getElementById("tapBtn").addEventListener("click", () => {
  fetch("http://localhost:5000/tap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer a977876e-5025-44ef-9696-7c12e00be69c"
    },
    body: JSON.stringify({})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById("status").innerText = data.message + " | hs: " + data.hs;
  })
  .catch(err => console.error("Error:", err));
});
