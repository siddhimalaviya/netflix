function show(a){

  // for ans hide and unhide

  var numberOfAns = document.querySelectorAll(".que-block").length;
  var element = document.querySelectorAll(".ans");
  if(element[a].style.display ==  "block"){
    element[a].style.display = "none";
  }else{
  for(let i=0 ;i<numberOfAns ;i++){
    element[i].style.display = "none";
  }
  element[a].style.display = "block";
  }

// for plus and cross icon

  var icon1 = document.querySelectorAll(".plus-icon");
  var icon2 = document.querySelectorAll(".cross-icon");

  for(let i=0 ;i<numberOfAns ;i++){
    if(document.querySelectorAll(".ans")[i].style.display == "block"){
      icon1[i].style.opacity = "0";
      icon2[i].style.opacity = "1";
    }else{
      icon1[i].style.opacity = "1";
      icon2[i].style.opacity = "0";
    }
  }
}

// login page learn more

function seePolicy(){
  var policyTerm = document.querySelector(".hide");
    policyTerm.style.display = "block";
    document.querySelector(".learn-more").style.display = "none";

}