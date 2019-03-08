//Time stamp
document.getElementById('time-stamp').innerHTML = Date();
//confirmation of logout
function confirmLogOut() {
	var user = confirm("Are you sure you would like to log out? Click OK to proceed");
	if (user) {
		window.location.href="index.html";
	}
}
//Make Reservation modal
document.getElementsByClassName("tablink")[0].click();
function openReservation(evt, reserveInfo) {
	var i, x, tablinks;
	x = document.getElementsByClassName("city");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].classList.remove("w3-light-grey");
	}
	document.getElementById(reserveInfo).style.display = "block";
	evt.currentTarget.classList.add("w3-light-grey");
}
//Menu tabs
function openMenu(evt, menuName) {
	var i, x, tablinks;
	x = document.getElementsByClassName("menu");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
	}
	document.getElementById(menuName).style.display = "block";
	evt.currentTarget.firstElementChild.className += " w3-red";
}
document.getElementById("myLink").click();
//Google Maps
function myMap() {
	myCenter = new google.maps.LatLng(40.803343, -73.910410);
	var mapOptions = {
		center:myCenter,
		zoom:14, scrollwheel: false, draggable: false, mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
	var marker = new google.maps.Marker({
		position: myCenter,
	});
	marker.setMap(map);
}
function calcOrderTotal() {
	//alert("test");
	var ordertotal = 0;
	var subtotal = 0;
	var itemP = document.getElementsByClassName("itemprice");
	var itemN = document.getElementsByClassName("itemname");
	var tipPercentage = document.getElementById("tipSelector").value;
	var tip = 0;
	var tax = 0.08875;
	var taxtotal = 0;
	//alert("test");
	// each element that is added to order should be given the addedtocart class so it is found by this function
	var itemQ = document.getElementsByClassName("itemquantity");
	//alert(itemQ.length);
	for (var i = 0; i < itemN.length; i++) {
		//alert("inside for loop");
		//alert(itemQ[i].value);
		subtotal += parseInt(itemP[i].value) * parseInt(itemQ[i].value);
	}
	subtotal = subtotal.toFixed(2);
	document.getElementById("subtotalLocation").innerHTML = subtotal.toString();
	if(subtotal > 50){
		console.log("discount applied");
		subtotal-=10;
		document.getElementById("discountLocation").innerHTML = -10.00;
	}else{
		document.getElementById("discountLocation").innerHTML = 0.00;
	}
	taxtotal = (subtotal * tax).toFixed(2);
	document.getElementById("taxLocation").innerHTML = taxtotal.toString();
	tip = (subtotal * tipPercentage).toFixed(2);
	document.getElementById("tipLocation").innerHTML = tip.toString();
	ordertotal = (parseFloat(subtotal) + parseFloat(taxtotal) + parseFloat(tip)).toFixed(2);
	document.getElementById("totalLocation").innerHTML = ordertotal.toString();
	//alert("total order price: $" + ordertotal);
}
function calcTakeOutOrderTotal() {
	//alert("test");
	var ordertotal = 0;
	var subtotal = 0;
	var itemP = document.getElementsByClassName("takeoutitemprice");
	var itemN = document.getElementsByClassName("takeoutitemname");
	var tipPercentage = document.getElementById("takeouttipSelector").value;
	var tip = 0;
	var tax = 0.08875;
	var taxtotal = 0;
	//alert("test");
	// each element that is added to order should be given the addedtocart class so it is found by this function
	var itemQ = document.getElementsByClassName("takeoutitemquantity");
	//alert(itemQ.length);
	for (var i = 0; i < itemN.length; i++) {
		//alert("inside for loop");
		//alert(itemQ[i].value);
		subtotal += parseInt(itemP[i].value) * parseInt(itemQ[i].value);
	}
	subtotal = subtotal.toFixed(2);
	document.getElementById("takeoutsubtotalLocation").innerHTML = subtotal.toString();
	if(subtotal > 50){
		console.log("discount applied");
		subtotal-=10;
		document.getElementById("takeoutdiscountLocation").innerHTML = -10.00;
	}else{
		document.getElementById("takeoutdiscountLocation").innerHTML = 0.00;
	}
	taxtotal = (subtotal * tax).toFixed(2);
	document.getElementById("takeouttaxLocation").innerHTML = taxtotal.toString();
	tip = (subtotal * tipPercentage).toFixed(2);
	document.getElementById("takeouttipLocation").innerHTML = tip.toString();
	ordertotal = (parseFloat(subtotal) + parseFloat(taxtotal) + parseFloat(tip)).toFixed(2);
	document.getElementById("takeouttotalLocation").innerHTML = ordertotal.toString();
	//alert("total order price: $" + ordertotal);
}
function addToTakeOutCheckout(ele){
	var iList = document.getElementById("takeoutitemlist");
	var itemN = document.getElementsByClassName("takeoutitemname");
	var id = ele.id;
	var incart = false;
	for(x = 0; x < itemN.length ; x++){
		console.log("This for loop");
		console.log(itemN.length);
		if(itemN[x].value == id){
			alert("This item is already in the cart. Please change quantity in the checkout area.");
			incart = true;
		}
	}
	if (!incart){
		var row = iList.insertRow();
		var namecell = row.insertCell(0);
		var quantitycell = row.insertCell(1);
		var pricecell = row.insertCell(2);
		console.log('area element id = ' + id);
		namecell.innerHTML = "<input class='takeoutitemname' type='text' name='item' value='pasta'>";
		quantitycell.innerHTML = "<input class='takeoutitemquantity' type='number' name='quantity' value='1'>";
		pricecell.innerHTML = "<input class='takeoutitemprice' type='number' name='price' value='6'>";
		namecell.getElementsByClassName("takeoutitemname")[0].value = id;
	}
}
function addToCheckout(ele){
	var iList = document.getElementById("itemlist");
	var itemN = document.getElementsByClassName("itemname");
	var id = ele.id;
	var incart = false;
	for(x = 0; x < itemN.length ; x++){
		console.log("This for loop");
		console.log(itemN.length);
		if(itemN[x].value == id){
			alert("This item is already in the cart. Please change quantity in the checkout area.");
			incart = true;
		}
	}
	if (!incart){
		var row = iList.insertRow();
		var namecell = row.insertCell(0);
		var quantitycell = row.insertCell(1);
		var pricecell = row.insertCell(2);
		console.log('area element id = ' + id);
		namecell.innerHTML = "<input class='itemname' type='text' name='item' value='pasta'>";
		quantitycell.innerHTML = "<input class='itemquantity' type='number' name='quantity' value='1'>";
		pricecell.innerHTML = "<input class='itemprice' type='number' name='price' value='6'>";
		namecell.getElementsByClassName("itemname")[0].value = id;
	}
}
function updateValueresName() {
	var x = document.getElementById("reservationNameid").value;
	document.getElementById("reservationNameid").value = x;
	console.log(x);
}
function updateValueresNumb() {
	var x = document.getElementById("reservationNumbid").value;
	document.getElementById("reservationNumbid").value = x;
	console.log(x);
}
function updateValueresTime() {
	var x = document.getElementById("reservationTimeid").value;
	document.getElementById("reservationTimeid").value = x;
	console.log(x);
}
function updateValueresTableNum() {
	var x = document.getElementById("reservationTableid");
	var currentSelected = x.options[x.selectedIndex].text;
	//document.getElementById("reservationTableid").value = currentSelected;
	console.log(currentSelected);
	return currentSelected;
}
function updateValueresTableStatus() {
	var x = document.getElementById("reservationTableAvailid");
	var currentSelected = x.options[x.selectedIndex].text;
	//document.getElementById("reservationTableAvailid").value = currentSelected;
	console.log(currentSelected);
	return currentSelected;
}
function nextTab(){
}
function addToReservation(ele){
	console.log("in add Reservation");
	var rList = document.getElementById("reservationlist");
	var reserveN = document.getElementsByClassName("reservationname");
	var id = ele.id;
	var incart = false;
	for(x = 0; x < reserveN.length ; x++){
		console.log("This for loop");
		console.log(reserveN.length);
		if(reserveN[x].value == id){
			alert("This item is already in the cart. Please change quantity in the checkout area.");
			incart = true;
		}
	}
	if (!incart){
		var row = rList.insertRow();
		var namecell = row.insertCell(0);
		var partyNumbcell = row.insertCell(1);
		var dateTimecell = row.insertCell(2);
		var tableNum = row.insertCell(3);
		var tableStatus = row.insertCell(4);
		console.log('area element id = ' + id);
		namecell.innerHTML = "<input class='reservationName' type='text' name='name' value='pasta'>";
		partyNumbcell.innerHTML = "<input class='reservationNumb' type='number' name='quantity' value='1'>";
		dateTimecell.innerHTML = "<input class='reservationTime' type='datetime-local' name='date' value='6'>";
		tableNum.innerHTML = "<input class='reservationTableNumb' type='text' name='table_quantity' value='1'>";
		tableStatus.innerHTML = "<input class='reservationTableStatus' type='text' name='table_status' value='pasta'>";
		namecell.getElementsByClassName("reservationName")[0].value = document.getElementById("reservationNameid").value;
		partyNumbcell.getElementsByClassName("reservationNumb")[0].value = document.getElementById("reservationNumbid").value;
		dateTimecell.getElementsByClassName("reservationTime")[0].value = document.getElementById("reservationTimeid").value;
		tableNum.getElementsByClassName("reservationTableNumb")[0].value = updateValueresTableNum();
		tableStatus.getElementsByClassName("reservationTableStatus")[0].value = updateValueresTableStatus();
	}
}