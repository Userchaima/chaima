function calculer() {
  const brut = parseFloat(document.getElementById("brut").value);
  if (isNaN(brut) || brut <= 0) {
    document.getElementById("resultat").innerHTML =
      "Veuillez entrer un salaire brut valide.";
    return;
  }

  const cnss = brut * 0.0918;
  const imposable = brut - cnss;
  let irpp = 0;

  if (imposable <= 5000) irpp = 0;
  else if (imposable <= 10000) irpp = (imposable - 5000) * 0.26;
  else irpp = 5000 * 0.26 + (imposable - 10000) * 0.28;

  const net = brut - cnss - irpp;

  document.getElementById("resultat").innerHTML = `
  
  <p><strong>Salaire Brut:</strong></td><td> ${brut.toFixed(2)} DT</p>
  <p><strong>CNSS (9.18%):</strong>  ${cnss.toFixed(2)} DT</p>
  <p><strong>IRPP:</strong> ${irpp.toFixed(2)} DT</p>
  <p><strong>Salaire Net:</strong>  ${net.toFixed(2)} DT</p>

  `;
}
