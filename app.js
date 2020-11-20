const plusButton = document.getElementById("plus-button");
const phoneContainer = document.getElementById("phone-container");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const dob = document.getElementById("dob");
const address = document.getElementById("address");
const zip = document.getElementById("zip");
const reset = document.getElementById("reset");
const save = document.getElementById("save");
const form = document.querySelector(".form");
const tableBody = document.querySelector("#table-body");
const allCheckBox = document.querySelector("#table-checkbox");
const table = document.querySelector(".table");
const deleteSelected = document.querySelector(".delete-selected");
const phoneDelete1 = document.getElementById("phoneDelete1");
const phoneDelete2 = document.getElementById("phoneDelete2");
var allItems = [];
var appenedOnlytwice = 0;


allCheckBox.addEventListener("click", () =>{
  if (document.getElementById("allcheck").checked == true){
    // console.log("clicked");
    
    var checkVar = document.getElementById("table-body");
    // for(let i =0; i<checkVar.length;i++){
    //   var objCell = checkVar.item(i);
    //   console.log(objCell)
    // }
    var checkboxall = checkVar.getElementsByTagName("INPUT");
    for(var i=0;i<checkboxall.length;i++){
      
      checkboxall[i].checked = true;
      allItems.push(i+1);
    }
    console.log(checkboxall);

    
    // console.log(checkVar);
  }
  else{
    var checkVar = document.getElementById("table-body");
    // for(let i =0; i<checkVar.length;i++){
    //   var objCell = checkVar.item(i);
    //   console.log(objCell)
    // }
    var checkboxall = checkVar.getElementsByTagName("INPUT");
    for(var i=0;i<checkboxall.length;i++){
      
      checkboxall[i].checked = false;
    }
    allItems = [];

  }
  
})

function alldelete() {
  var proceed = confirm("Do you want to delete selected");
  if(proceed == true){
    const checkSelected1 = cb(1);
    const checkSelected = checkSelected1.sort().reverse();
    for (let i = 0; i < checkSelected.length; i++) {
      document.querySelector(".table").deleteRow(checkSelected[i]);
    }
    
    cb(0);
    // allCheckBox.checked = false;

  }
  else{
    var checkVar = document.getElementById("table-body");
    var checkboxall = checkVar.getElementsByTagName("INPUT");
    for(var i=0;i<checkboxall.length;i++){
      
      checkboxall[i].checked = false;
    }
    document.getElementById("allcheck").checked= false;
    allItems = [];
  }
}
function cb(a) {
  if (a == 1) {
    return allItems;
  } else {
    allItems = [];
    document.getElementById("allcheck").checked= false;
    return 0;
  }
}
deleteSelected.addEventListener("click", alldelete);

plusButton.addEventListener("click", () => {
  if (appenedOnlytwice < 2) {
    appenedOnlytwice++;

    const input = document.createElement("input");
    input.type = "number";
    input.className = "phone-block";
    input.id = "phoneDelete" + appenedOnlytwice;
    input.setAttribute("maxlength",10)

    phoneContainer.appendChild(input);
    const deleteButton = document.createElement("span");

    deleteButton.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>`;
    phoneContainer.append(deleteButton);
    deleteButton.addEventListener("click", () => {
      deleteButton.previousSibling.remove();
      deleteButton.remove();
      appenedOnlytwice--;
    });
  } else {
    alert("only two will be allowed");
  }
});

function resetButton() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  dob.value = "";
  phone.value = "";
  address.value = "";
  zip.value = "";
  document.getElementById("country").value="";
  document.getElementById("state").value="";
}

reset.addEventListener("click", resetButton);

form.addEventListener('submit', function(e) {
    e.preventDefault();
  
   
  });

addListItem = () => {

 if( validateContent()){
   alert("Values are missing");
   return 0;
 }


  const rowCount = tableBody.rows.length;
  const row = tableBody.insertRow(rowCount);

  var checkk = document.createElement("input");
  checkk.type = "checkbox";
  checkk.name = "forAllCheck"
  

  checkk.addEventListener("click", () => {
    console.log(row.rowIndex);
    allItems.push(row.rowIndex);
  });

  const deleteButton = document.createElement("span");
  deleteButton.innerHTML = `<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
</svg>`;

  deleteButton.addEventListener("click", () => {
    console.log(row.rowIndex);
    document.querySelector(".table").deleteRow(row.rowIndex);
  });

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  cell1.appendChild(checkk);

  cell2.innerHTML = firstName.value + " " + lastName.value;
  cell3.innerHTML = email.value;
  cell4.innerHTML = dob.value;
  try {
    cell5.innerHTML =
      phone.value +
      " , " +
      document.getElementById("phoneDelete1").value +
      " , " +
      document.getElementById("phoneDelete2").value;
  } catch (error) {
    try {
      cell5.innerHTML =
        phone.value + " , " + document.getElementById("phoneDelete1").value;
    } catch (error) {
      try {
        cell5.innerHTML =
          phone.value + " , " + document.getElementById("phoneDelete2").value;
      } catch (error) {
        cell5.innerHTML = phone.value;
      }
    }
  }
  try{
  document.getElementById("phoneDelete1").value = "";
  document.getElementById("phoneDelete2").value = "";
  }
  catch(error){
    try{
        document.getElementById("phoneDelete1").value = "";
        }
        catch(error){
            try{
                document.getElementById("phoneDelete2").value = "";
            }
            catch(error){

            }
        }
  }

  
  cell6.innerHTML = address.value+", "+document.getElementById("country").value+", "+document.getElementById("state").value+" - "+document.getElementById("zip").value;

  cell7.appendChild(deleteButton);

  resetButton();
};

save.addEventListener("click", addListItem);

function validateContent(){
  if(!(firstName.value&&lastName.value&&email.value&&dob.value&&phone.value&&address.value&&zip.value&&document.getElementById("state").value&&document.getElementById("zip").value)){
    return 1;
  }
  else {
    return 0;
  }
}




