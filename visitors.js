class visitors{
constructor() {
  this.readVis();
}
readVis() {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      visitorsj = JSON.parse(req.responseText);
    }
  };
req.open("GET", "https://api.jsonbin.io/b/5d01718a58196b429f531060", true);
  req.setRequestHeader("secret-key", "$2a$10$p.CTiBAWfrHYWKzTm5MTxe6WkXeRXJCkacxYIT5ejDmmYr3rWFP/y");
  req.send();
}
}