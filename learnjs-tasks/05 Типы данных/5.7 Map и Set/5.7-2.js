function aclean(arr) {
    let object = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      object[sorted] = arr[i];
    }
  
    return Object.values(object);
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  alert(aclean(arr));