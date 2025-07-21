let balance = 0;

document.getElementById("mineBtn").addEventListener("click", () => {
  balance += 0.00001;
  document.getElementById("balance").innerText = `Saldo: ${balance.toFixed(5)} BEX`;
});