
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
