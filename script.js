//root-from-html
const root = document.querySelector(".root");

//alert
window.onload = () => {
  alert("Selamat datang! Silakan isi form di bawah.");
};

//header
const hWrapper = document.createElement("div");
hWrapper.classList.add("hWrapper");

const header = document.createElement("h1");
header.innerText = "Tugas-2 Praktikum Pemrograman Web";
header.classList.add("header");

hWrapper.append(header);
root.append(hWrapper);
////

// main-content
const mainContent = document.createElement("div");
mainContent.classList.add("main-content")
root.appendChild(mainContent);

// form
const form = document.createElement("form");
const formContainer = document.createElement("div");

// input-username
const usernameWrp = document.createElement("div");

const usernameLabel = document.createElement("label");
usernameLabel.htmlFor = "usernameInput";
usernameLabel.innerText = "Username";

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "usernameInput";
usernameInput.placeholder = "cth : Edwin Jonatan Purba";
usernameInput.required = "true"

usernameWrp.append(usernameLabel, usernameInput);
formContainer.appendChild(usernameWrp);
////

// input-NIM
const nimWrp = document.createElement("div");

const nimLabel = document.createElement("label");
nimLabel.htmlFor = "nimInput";
nimLabel.innerText = "NIM";

const nimInput = document.createElement("input");
nimInput.type = "text";
nimInput.id = "nimInput";
nimInput.placeholder = "cth : 231401169";
nimInput.required = "true"

nimWrp.append(nimLabel, nimInput);
formContainer.appendChild(nimWrp);
////

// input-KOM
const komWrp = document.createElement("div");

const komLabel = document.createElement("label");
komLabel.htmlFor = "komInput";
komLabel.innerText = "KOM";

const komInput = document.createElement("input");
komInput.type = "text";
komInput.id = "komInput";
komInput.placeholder = "cth : A";
komInput.required = "true"

komWrp.append(komLabel, komInput);
formContainer.appendChild(komWrp);
////

// input-photo
const photoWrp = document.createElement("div");

const photoLabel = document.createElement("label");
photoLabel.htmlFor = "photoInput";
photoLabel.innerText = "Upload Photo";

const photoInput = document.createElement("input");
photoInput.type = "file";
photoInput.id = "photoInput";
photoInput.accept = "image/png, image/jpeg";
photoInput.required = "true"

photoWrp.append(photoLabel, photoInput);
formContainer.appendChild(photoWrp);
////

// input-submit
const submit = document.createElement("input");
submit.type = "submit";

formContainer.append(submit);
form.append(formContainer);
mainContent.append(form);
////

// card-start
const displayContainer = document.createElement("div");
displayContainer.classList.add("display-container");
mainContent.append(displayContainer);

displayContainer.style.display = "none";

////////////////////////////////////////////////////////////

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const username = usernameInput.value;
  const nim = nimInput.value;
  const kom = komInput.value;
  const photo = photoInput.files[0];

  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = URL.createObjectURL(photo);
  img.alt = "User Photo";

  const usernameDisplay = document.createElement("p");
  usernameDisplay.innerText = `Username: ${username}`;

  const nimDisplay = document.createElement("p");
  nimDisplay.innerText = `NIM: ${nim}`;

  const komDisplay = document.createElement("p");
  komDisplay.innerText = `KOM: ${kom}`;

  card.append(img, usernameDisplay, nimDisplay, komDisplay);

  displayContainer.innerHTML = "";
  displayContainer.append(card);

  displayContainer.style.display = "block";
  form.style.width = "500px";

  alert("Form berhasil disubmit!");
});
///