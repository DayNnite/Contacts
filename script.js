// Array of contacts
let contacts = ["Arnold", "Sly", "Dwayne", "Vin", "JCVD", "Steven"];

// Button trigger
document.getElementById("findContactBtn").onclick = function() {
  let keepGoing = true;

  while (keepGoing) {
    let slot = prompt("Enter a slot number (0–5):");

    if (slot === null) break; // user canceled

    // Check if slot is valid and exists
    if (slot >= 0 && slot < contacts.length) {
      alert("You selected " + contacts[slot] + ".");
      document.getElementById("status").innerHTML = "You selected " + contacts[slot] + ".";
    } else {
      alert("Name not found.");
    }

    let again = prompt("Would you like to select another name? (Y/N)");

    if (again === null || again.toLowerCase() !== "y") {
      keepGoing = false;
    }
  }
};
