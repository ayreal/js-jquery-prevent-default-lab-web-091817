$(document).ready(function() {
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $("form").on("submit", function(event) {
    event.preventDefault();
    var task = $("input").val();
    let newTask = document.createElement("li");
    newTask.innerText = task;
    document.getElementById("list").appendChild(newTask);
    document.getElementById("item").value = "";
  });
}
