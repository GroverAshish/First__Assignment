var index = 1;
ar = [];
var cell=[];
var tablerows=[];
var cell1;
var num;
var phone = {};
var Email = {};
var isEditing=false;
var Edit_index;
localStorage.clear();
var text1 = "";
function display() {
    var firstname = document.completeform['firstname'];
    var lastname = document.completeform['lastname'];
    var email = document.completeform['email'];
    var address = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    var num = document.completeform['mobilenum'];
    var pass = document.completeform['password'];
    var confirm = document.completeform['confirmpassword'];
    var mobnum = /^[6-9]\d{9}$/;
    var psw = /^[A-Za-z]\w{7,14}$/;

    if (!num.value.match(mobnum)) {
        alert(
            "Please enter valid Phone number.");
        num.value = "";
        num.focus();
        return false;
    }

    if (email.value.match(address)) {
        alert(
            "Please Enter Valid email address.");
        email.value = "";
        email.focus();
        return false;
    }

    if (!pass.value.match(psw)) {
        alert(
            "Please choose valid password!");
        pass.value = "";
        pass.focus();
        return false;
    }

    if (confirm.value === "") {
        alert(
            "Please confirm password.");
        confirm.focus();
        return false;
    }

    if (pass.value !== confirm.value) {
        alert(
            "Pasword must be same.")
        confirm.value = "";
        confirm.focus();
        return false;
    }

    if(phone[num.value+""]==null)
    {
        phone[num.value+""]="Yes";
    }
    else
    {
        alert("This number is already occupied use different number");
        num.focus();
        return false;
    }

    if(Email[email.value+""]==null){
        Email[email.value+""]="Yes";
    }
    else{
        alert("This email is already occupied use different email")
        phone[num.value+""]=null;
        email.focus();
        return false;
    }

    if(isEditing==true)
    {
        var Editable_Row=document.getElementById(Edit_index);

        Editable_Row.innerHTML =`   
            <td>${firstname.value}</td>
            <td>${lastname.value}</td>
            <td>${num.value}</td>
            <td>${email.value}</td>
            <td>${pass.value}</td>
            <td><button class="btn btn-primary" onclick="deleteEntry("${Edit_index}")">Delete</button></td>
            <td><button class="btn btn-primary" onclick="deleteEntry("${Edit_index}")">Edit</button></td>
          `
          
          var Storage_details=[firstname.value, lastname.value, num.value, email.value, pass.value];
          localStorage.setItem(Edit_index,JSON.stringify(Storage_details));

    
          firstname.value = "";
          lastname.value = "";
          num.value = "";
          email.value = "";
          pass.value = "";
          confirm.value = "";
          firstname.focus();
          isEditing=false;
          return false;
    }
    else{
    

    ar = [];
    ar = [firstname.value, lastname.value, num.value, email.value, pass.value];
    localStorage.setItem(index + "", JSON.stringify(ar));
    table=document.getElementById("infotable")
    
    row=table.insertRow(1);
    cell=[];
    for(i=0;i<5;i++)
    {
        cell1=row.insertCell(i);
        cell.push(cell1);
        cell[i].innerHTML=ar[i];
    }
    cell1=row.insertCell(i)
    cell.push(cell1);
    cell[i].innerHTML=`<button  class="btn btn-primary" onclick="deleteEntry(${index})">Delete</button>`
    tablerows=document.querySelectorAll("#infotable tr")
    i++;
    cell1=row.insertCell(i);
    cell.push(cell1);
    cell[i].innerHTML=`<button  class="btn btn-primary" onclick="editEntry(${index})">Edit</button>`;
    tablerows[1].setAttribute("id",index);
    index++;

    if(localStorage.length==0)
    div.style.display="none";
    else
    div.style.display="block";

    firstname.value = "";
    lastname.value = "";
    num.value = "";
    email.value = "";
    pass.value = "";
    confirm.value = "";
    firstname.focus();

    return false;}

}

var div = document.getElementById("showcontent");


  function deleteEntry(index1)
  {
    var check=[];
    check=JSON.parse(localStorage.getItem(index1));
    phone[check[2]]=null;
    Email[check[3]]=null;
    document.getElementById(index1).remove();
    localStorage.removeItem(index1);

    if(localStorage.length==0)
    div.style.display="none";
    else
    div.style.display="block";
    
  }

 function editEntry(index1)
 {
    var formdetails=[];
    formdetails=JSON.parse(localStorage.getItem(index1));
    document.completeform['firstname'].value=formdetails[0];
    document.completeform['lastname'].value=formdetails[1];
    document.completeform['mobilenum'].value=formdetails[2];
    document.completeform['email'].value=formdetails[3];
    document.completeform['password'].value=formdetails[4];
    console.log(formdetails)
    phone[formdetails[2]]=null;
    Email[formdetails[3]]=null;
    isEditing=true;
    Edit_index=index1;
 }

  if(localStorage.length==0)
  div.style.display="none";
