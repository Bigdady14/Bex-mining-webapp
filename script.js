const telegramUserId = new URLSearchParams(window.location.search).get("user_id");
let hashrate = 1;

async function mine() {
  const response = await fetch("http://localhost:5000/mine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: telegramUserId,
      hashrate: hashrate
    }),
  });

  const data = await response.json();
  if (data.success) {
    document.getElementById("balance").textContent = `${data.balance.toFixed(2)} BEX`;
    document.getElementById("hashrate").textContent = `${data.hashrate.toFixed(2)} H/s`;
  } else {
    alert("Mining failed: " + data.message);
  }
}
// Ambil user_id dari URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");
document.getElementById("mine-btn").addEventListener("click", mine);
