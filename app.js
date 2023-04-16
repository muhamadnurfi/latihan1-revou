// var name = prompt("Masukkan Nama Kamu");
// document.getElementById("nama").innerText = name;


function validateForm() {
  // bagian untuk menetapkan nilai dari formnya
  var name = document.forms["message-form"]["full-name"].value;
  var date = document.forms["message-form"]["birth-date"].value;
  var gender = document.forms["message-form"]["gender"].value;
  var messages = document.forms["message-form"]["messages"].value;

  if(name == "" || date == "" || gender == "" || messages == "") {
    alert("Input tidak boleh kosong");
    return false;
  }

  // bagian untuk memindahkan nilai dari formnya ke value
  document.getElementById("sender-full-name").innerText = name;
  document.getElementById("sender-birth-date").innerText = date;
  document.getElementById("sender-gender").innerText = gender;
  document.getElementById("sender-messages").innerText = messages;
  return false;
}