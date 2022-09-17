//alert("loading")
function addNewWEfield() {
    //console.log("Adding new field");
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter")

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
function addNewEqfiled(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter")

    let weOb = document.getElementById("eq");
    let weAddButtonOb = document.getElementById("eqAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewskfiled(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let weOb = document.getElementById("sk");
    let weAddButtonOb = document.getElementById("skAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
function addNewcrfiled(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("crField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let weOb = document.getElementById("cr");
    let weAddButtonOb = document.getElementById("crAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
function addNewapfiled(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("apField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here")

    let weOb = document.getElementById("ap");
    let weAddButtonOb = document.getElementById("apAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}
//genarate cv
function generateCV()
{
    let nameField = document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML = nameField;
    //direct

    document.getElementById('nameT2').innerHTML=nameField;
    //contact
    document.getElementById('contactT').innerHTML=document.getElementById("phoneField").value;
    //address
    document.getElementById('addressT').innerHTML=document.getElementById("addField").value;
    document.getElementById('mailT').innerHTML=document.getElementById("mailField").value;
    document.getElementById('linkT').innerHTML=document.getElementById("linkedField").value;
    //about me
    document.getElementById('aboutT').innerHTML=document.getElementById("aboutField").value;

    //work exp
    let wes = document.getElementsByClassName("weField");
    let str6 = "";
   
  
    for (let e of wes) {
      str6 = str6 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("weT").innerHTML = str6;
  
    //edu qualf

    let edq = document.getElementsByClassName("eqField");
    let str1 = "";
  
    for (let e of edq) {
      str1 = str1 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("ebT").innerHTML = str1;

    //image
    let file= document.getElementById("imgfield").files[0];
    console.log(file);
    let reader= new FileReader()
    reader.readAsDataURL(file);
    console.log(reader.result);

    //set the image to template
reader.onloadend=function(){
    document.getElementById('impTemplate').src=reader.result;
};


    //Skills

    let skl = document.getElementsByClassName("skField");
    let str2 = "";
  
    for (let e of skl) {
      str2 = str2 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("skT").innerHTML = str2;

    //certifications

    let crt = document.getElementsByClassName("crField");
    let str3 = "";
  
    for (let e of crt) {
      str3 = str3 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("cT").innerHTML = str3;

    //projects

    let prt = document.getElementsByClassName("apField");
    let str4 = "";
  
    for (let e of prt) {
      str4 = str4 + `<li> ${e.value} </li>`;
    }
  
    document.getElementById("pT").innerHTML = str4;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

//print CV
function printCV()
{
    window.print();
}
