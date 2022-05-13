document.getElementById("openFile").addEventListener('change', Function(){
            var fr = new FileReader();
            fr.onload = Function(){
                document.getElementById("fileContents").textContent = this.result;
    }
    fr.readAsText(this.files[0]);        
})
                                                     


function loadFileAsText(){
	  var myFile = document.getElementById("myFile").files[0];
 
	  var fileReader = new FileReader();
	  fileReader.onload = function(fileLoadedEvent){
		  var textFromFileLoaded = fileLoadedEvent.target.result;
		  document.getElementById("inputTextToSave").value = textFromFileLoaded;
	  };
 
	  fileReader.readAsText(myFile, "UTF-8");
	}
	function savefile(){
		var content = document.getElementById("inputTextToSave").value;
		uriContent = "data:application/octet-stream," + encodeURIComponent(content);
		document.getElementById("dlink").innerHTML = "<a href=" + uriContent + " download=\"savedfile.txt\">Here is the download link</a>";
}
