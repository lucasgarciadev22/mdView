function myFunction() {

    var text = document.getElementById("textInput").value;
    
    document.getElementById("content").innerHTML = marked.parse(text);
    

}
