// Ambil user_id dari parameter URL Telegram WebApp
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get("user_id");

// Event klik tombol "TAP to Mine"
document.getElementById("mine-btn").addEventListener("click", () => {
  if (!userId) {
    alert("User ID tidak ditemukan.");
    return;
  }

  fetch("https://your-backend-url.vercel.app/mine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ user_id: userId })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        document.getElementById("balance").textContent =
          data.balance.toFixed(2) + " BEX";
        document.getElementById("hashrate").textContent =
          data.hashrate + " H/s";
      } else {
        alert("Gagal mining: " + data.message);
      }
    })
    .catch(err => {
      alert("Terjadi kesalahan koneksi.");
      console.error(err);
    });
});
