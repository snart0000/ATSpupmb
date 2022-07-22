const search= () =>{
	const searchbox = document.getElementById("search-student").value.toUpperCase();
	const studentList = document.getElementById("student-list")
	const student = document.querySelectorAll(".student")
	const sname = studentList.getElementsByTagName("h2")
	
	for(var i=0; i<sname.length;i++){
		let match = student[i].getElementsByTagName("h2")[0];
		
		if(match){
			let textvalue = match.textContent || match.innerHTML
			
			if(textvalue.toUpperCase().indexOf(searchbox) > -1){
				student[i].style.display = "";
			}else{
				student[i].style.display = "none";
			}
		}
	}
}