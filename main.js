'use strict';

const movieSelect = document.querySelector("#hhh");
const movieNameDisplay = document.querySelector("#show-movie-name");
const moviePriceDisplay = document.querySelector("#show-movie-price");
const seats = document.querySelectorAll(".size-of-seat-below-header");
const selectedSeatsContainer = document.querySelector("#containing-number");
const total_value=document.querySelector("#total-price-calculate");
const total_value_=document.querySelector("#total-value");
const continuee=document.querySelector("#continue-btn");
const cancel=document.querySelector("#cancel")
let selectedSeats = [];
const idd="occupied";
const rty="YAY Your seats Have been booked";

// Change the color of seats if they are not occupied
seats.forEach(seat => {
    seat.addEventListener("click", function() {
        const seatStyle = window.getComputedStyle(seat);
        const seatNumber = seat.textContent;
if(selectedSeats.length>4){
    if (seatStyle.backgroundColor === "rgb(0, 128, 0)") {
        seat.style.backgroundColor = "rgb(255, 255, 255)"; // Deselect
        selectedSeats = selectedSeats.filter(rt => rt !== seatNumber);
    }else   if (seatStyle.backgroundColor === "rgb(128, 128, 128)") {
        return alert("this seat is already BOOKED")
    } else{
        alert ("5 SEATS ALREADY BOOKED")
    }
    

}else if(selectedSeats.length<=4){
        // If the seat is occupied (gray)
        if (seatStyle.backgroundColor === "rgb(128, 128, 128)") {
            return alert("this seat is already BOOKED")
        } 
        
        // If the seat is available (white)
        if (seatStyle.backgroundColor === "rgb(255, 255, 255)") {
            seat.style.backgroundColor = "rgb(0, 128, 0)"; // Change to selected color
            selectedSeats.push(seatNumber);
        } 
        
        // If the seat is selected (green)
        else if (seatStyle.backgroundColor === "rgb(0, 128, 0)") {
            seat.style.backgroundColor = "rgb(255, 255, 255)"; // Deselect
            selectedSeats = selectedSeats.filter(rt => rt !== seatNumber); // Remove seat
        }
        
        // Update selected seats display
        }
        selectedSeatsContainer.textContent = selectedSeats;
    });
});
// Price of each movie
const priceObj = {
    golmal: 3,
    dhamal: 2,
    Sector36: 4,
};
movieSelect.addEventListener("change", function() {
    const selectedMovie = movieSelect.value;
    movieNameDisplay.textContent = selectedMovie ? selectedMovie : "Select a movie"; // Provide feedback
    moviePriceDisplay.textContent = selectedMovie in priceObj ? `${priceObj[selectedMovie]}$ per seat`:" " // Show price if movie is selected
});

total_value.addEventListener("click",kjkl);
function kjkl(){
    const tryy=confirm("are u sure to proceed further")
    if(tryy){
        if(selectedSeats.length==0||moviePriceDisplay.textContent==""){
            total_value_.textContent="Please Fill Correctly"
        }else{
        total_value_.textContent=`${selectedSeats.length*parseInt (moviePriceDisplay.textContent)}$`
        }
    }
    else if(!tryy){
        return;
    }
}
continuee.addEventListener("click",kkjk);
function kkjk(){
    if(parseInt(total_value_.textContent)>=2){
        seats.forEach(seat => {
            const seatStyle = window.getComputedStyle(seat);
            if (seatStyle.backgroundColor === "rgb(0, 128, 0)") {
            seat.style.backgroundColor = "rgb(128, 128, 128)";
        }
        })
    alert("YAY Your seats Have been booked")
    }else {
        alert("Please fill details correctly")
    }
}
cancel.addEventListener("click",lklo);
function lklo(){
    history.go(0);
}

