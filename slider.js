const lightSwitch = document.querySelector("#slider");




function switchJs(lightSwitch) {
  if (lightSwitch.checked = true) {
    document.getElementById("js").setAttribute("src", "./arrayAdd.js");
    document.getElementById("bodMod").setAttribute("style", "background-color: purple;");
    console.log("checked");
    // lightSwitch = -1;
    // return false;
  } else if (lightSwitch.checked = false) {
    document.getElementById("switch").setAttribute("src", "./main.js");
    lightSwitch = 1;
      console.log("un-checked");

    // return false;
  }

}
