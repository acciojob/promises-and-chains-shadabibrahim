//your JS code here. If required.
 let ageInput = document.getElementById('age');
 let nameInput = document.getElementById('name');
let btn = document.getElementById('btn');

function agePromise(age,name) {
	return new Promise((resolve, reject) => {
  setTimeout(() => {
    if (age >= 18) {
      resolve(`Welcome, ${name}. You can vote.`);
    } else {
      reject(`Oh sorry ${name}. You aren't old enough.`);
    }
  }, 4000);
});
}

async function result(){
	let age= ageInput.value;
	let name =nameInput.value;
	try {
		let res = await agePromise(age,name);
			alert(res)
	} catch (error) {
		alert(error)
	}
}
btn.addEventListener('click',(e)=>{
	e.preventDefault();
	if (ageInput.value === "" || nameInput.value === "") {
        alert("Please enter valid details")
		return;
    }
    else
    {
       result();
    }
})
