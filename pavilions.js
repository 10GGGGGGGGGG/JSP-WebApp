class pavilions{
constructor() {
  this.readPavs();
}
readPavs() {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      pavilionsj = JSON.parse(req.responseText);
    }
  };
req.open("GET", "https://api.jsonbin.io/b/5d015887306724684b0d481c", true);
  req.setRequestHeader("secret-key", "$2a$10$p.CTiBAWfrHYWKzTm5MTxe6WkXeRXJCkacxYIT5ejDmmYr3rWFP/y");
  req.send();
}
}