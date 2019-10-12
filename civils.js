class civils{
constructor() {
  this.readCvs();
}
readCvs() {
  let req = new XMLHttpRequest();
  req.onreadystatechange = () => {
    if (req.readyState == XMLHttpRequest.DONE) {
      civilj = JSON.parse(req.responseText);
    }
  };
req.open("GET", "https://api.jsonbin.io/b/5d016e7b2132b7426d001f8c", true);
  req.setRequestHeader("secret-key", "$2a$10$p.CTiBAWfrHYWKzTm5MTxe6WkXeRXJCkacxYIT5ejDmmYr3rWFP/y");
  req.send();
}
}