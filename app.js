/* TEST - SHUBHPARTEEK SINGH AND ID 6213361 */

//----- DO NO TOUCH BELOW ----//
function output(){
	alert(str);
}
//----- DO NOT TOUCH ABOVE ----//

// select the button 

const button = document.querySelector('#calculate');

// console.dir(button);


button.addEventListener('click', function () {
  // declering the valiaable and getting the values from form 

  let billAmmount = Number((document.querySelector("#totalBill").value));
  let service = Number(document.querySelector("#service").value);
  let numPeople = Number((document.querySelector("#peopleCount").value));


 // TO VALIDATE 
 if(!billAmmount||!service||isNaN(service)|| isNaN(billAmmount)){
	alert("Please fill out all the fields")
 }else{

	if( !numPeople||isNaN(numPeople) || Math.sign(numPeople)===-1){
		document.getElementById("peopleCount").value =1;
		numPeople=1;
		//console.log(billAmmount,service, numPeople);
	}
	// using function to calculate 

	const billTip= tipCalculator(billAmmount,service);

	const billTotal = billAmmount+billTip

	const tipPerPerson = Math.round((billTip/numPeople) * 100) / 100;

	const totalPerPerson = Math.round((billTotal/numPeople) * 100) / 100; 

	// checking the result in console
	//console.log(billAmmount,service, numPeople, billTip, billTotal, tipPerPerson, totalPerPerson);
	const displayConatiner = document.querySelector("#tipAndTotal");

	// adding the values to displaye in html

	if(document.getElementById("para")){
		document.getElementById("para").remove();
	}  if (!document.getElementById("para")){
		const paragraph = document.createElement("p");
		paragraph.classList.add("tipAndTotalTextStyle");
		paragraph.setAttribute('id','para');
		paragraph.innerText= `Tip/person: ${tipPerPerson} $ 
		Total/person: ${totalPerPerson} $`;
		displayConatiner.append(paragraph);
		//alert("Your waiter, thanks you");
		setTimeout(function () { alert("Your waiter, thanks you"); }, 100)
	}	

 } 
 
});

function tipCalculator(billAmmount, service) {

    return Number(billAmmount*service)

};

function tooManyWords( slogan ){

	if(!slogan || typeof(slogan)!= "string"){
      return  console.log("Cannot complete request")
	}
	else{

		//console.log(slogan.length)

		const splitSlogan= slogan.split(" ");
	
		let empty = '';
		for(let i=0; i<splitSlogan.length;i++){
			empty += splitSlogan[i].charAt(0).toUpperCase();

			// to check the char
			//console.log(empty +`${splitSlogan[i].charAt(0).toUpperCase()}`);
			 
		}
		console.log(`${empty} stands for ${slogan}`)
	}
};
 
tooManyWords("Too Many Words");
tooManyWords("OMG. It’s Test Day");
tooManyWords("It's not T-shirt season anymore");
tooManyWords("supercalifragilisticexpialidocious");
tooManyWords("");