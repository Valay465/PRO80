var guest_list = [];
var guest_list_newline = "";

function submit() {
  guest_list.push(document.getElementById("add").value);
  document.getElementById("guests-comma").innerHTML=guest_list;
  guest_list_newline = guest_list_newline + document.getElementById("add").value + "<br>";
  document.getElementById("add").value = "";
}

function show() {
  document.getElementById("guests-newline").innerHTML = guest_list_newline;
}

function sort() {
  sorted = guest_list.sort();
  var sorted_newline = "";
  for (let i = 0; i < sorted.length; i++) {
    sorted_newline = sorted_newline + sorted[i] + "<br>";
  }
  document.getElementById("sorted").innerHTML = sorted_newline;
}

function search() {
  var s = document.getElementById("search-box").value;
  var found = 0;
  var j;
  for(j = 0; j< guest_list.length; j++) {
    if (s === guest_list[j]) {
      found++;
    }
  }
  document.getElementById("sr").innerHTML = "Search Results: Found " + found + " time(s)."
  document.getElementById("search-box").value = "";
}