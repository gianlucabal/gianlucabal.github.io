document.getElementById("dataForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita il comportamento di default del form
  
  // Recupera i dati inseriti dall'utente
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  
  // Crea un oggetto con i dati
  var data = {
    name: name,
    email: email
  };
  
  // Invia i dati al server per il salvataggio
  saveData(data);
  
  // Pulisce il form
  document.getElementById("dataForm").reset();
});

function saveData(data) {
  // Effettua una richiesta AJAX per salvare i dati sul server
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "save_data.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Riceve la risposta dal server (se necessario)
      var response = xhr.responseText;
      console.log(response);
      // Aggiorna la visualizzazione dei dati salvati
      showSavedData();
    }
  };
  xhr.send(JSON.stringify(data));
}

function showSavedData() {
  // Effettua una richiesta AJAX per recuperare i dati salvati dal server
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "get_data.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Riceve la risposta dal server
      var data = JSON.parse(xhr.responseText);
      // Visualizza i dati
      document.getElementById("savedData").innerHTML = "<h3>Dati Salvati:</h3><p>Nome: " + data.name + "</p><p>Email: " + data.email + "</p>";
    }
  };
  xhr.send();
}

// Chiamata iniziale per mostrare eventuali dati già presenti
showSavedData();
