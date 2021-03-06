/* Background image */
window.onload = function() {
    var screenHeight = screen.height;
    var screenWidth = screen.width;
    $("#backgroundImage").height(screenHeight);
}

/* This is for allowing a custom donation */

//global vars
var customDonation = document.getElementById("donationAmount");
var payCustom = document.getElementById("customDonation");
var moneyTotal = document.getElementById("totalDonation");

// sets whats originally selected and readonly
function setReadOnly() {
    var select = document.getElementById("select");
    select.selected = true;
    payCustom.readOnly = true;
    moneyTotal.textContent += " $0.00";
}

// lets you add custom donation
customDonation.onchange = function() {
    if (customDonation.value == "custom") {
        payCustom.readOnly = false;
        document.getElementById("donationLabel").textContent += "*";
        // document.getElementById("donationLabel").setAttribute("class", "text-danger")
        console.log("E-YES");
        console.log(customDonation.value);
    }
    // resets the custom donation
    if (customDonation.value != "custom") {
        payCustom.readOnly = true;
        payCustom.value = "";
        document.getElementById("donationLabel").innerHTML = "Custom Donation";
    }
    dontationTotal();
};

payCustom.onchange = function() {
    var customAmount = document.getElementById("customDonation").value;
    if (customDonation.value === "custom") {
        console.log("working...");
        console.log(moneyTotal.value);
        // moneyTotal.textContent = "Total Donation: $0.00";
        if (!isNaN(customAmount)) {
            moneyTotal.textContent = "Total Donation: $" + Math.round(customAmount);
            console.log(customAmount, "AHHHH");
        } else if (isNaN(customAmount)) {
            moneyTotal.textContent = "Total Donation: $0.00";
        }


        // customAmount.onchange = function() {

        // }
    }
}

function dontationTotal() {

    var setDonation = document.getElementById("donationAmount").value;
    if (setDonation != "custom") {
        moneyTotal.textContent = "Total Donation: $" + setDonation + ".00";
    }
    if (setDonation === "custom") {
        moneyTotal.textContent = "Total Donation: $0.00";
        document.getElementById("customDonation").setAttribute("required", "required")
    }
}
document.addEventListener("load", setReadOnly());



/* For Coping Info From Money Donation
 ================================================================================================================== 
  ================================================================================================================== 
   ================================================================================================================== 
    ================================================================================================================== 
   ================================================================================================================== 
  ================================================================================================================== 
 ================================================================================================================== 
*/

var donationForm = document.getElementById("donationForm");
var useInfo = document.getElementById("useInfoAbove");




donationForm.onchange = function getFormInfo() {
    // Donation Form Info
    var fNameDonation = document.getElementById("formFirstN").value;
    var MiddleIDonation = document.getElementById("formMiddleI").value;
    var lNameDonation = document.getElementById("formLastN").value;
    var addressDonation = document.getElementById("address").value;
    var addressDonation2 = document.getElementById("address2").value;
    var cityDonation = document.getElementById("city").value;
    var stateDonation = document.getElementById("state").value;
    var zipDonation = document.getElementById("zip").value;
    var emailDonation = document.getElementById("formEmail").value;
    var phoneDonation = document.getElementById("formPhone").value;
    var cardDonation = document.getElementById("formCard").value;
    var CVCDonation = document.getElementById("formCVC").value;
    var monthDonation = document.getElementById("formExp").value;
    var yearDonation = document.getElementById("formExpD").value;
    var typeOfDonation = document.getElementById("donationType").value;

    // Gear Form Info
    var fNameGear = document.getElementById("formFirstNGear");
    var MiddleIGear = document.getElementById("formMiddleIGear");
    var lNameGear = document.getElementById("formLastNGear");
    var addressGear = document.getElementById("addressGear");
    var addressGear2 = document.getElementById("addressGear2");
    var cityGear = document.getElementById("cityGear");
    var stateGear = document.getElementById("stateGear");
    var zipGear = document.getElementById("zipGear");
    var emailGear = document.getElementById("formEmailGear");
    var phoneGear = document.getElementById("formPhoneGear");
    var cardGear = document.getElementById("formCardGear");
    var CVCGear = document.getElementById("formCVCGear");
    var monthGear = document.getElementById("formExpGear");
    var yearGear = document.getElementById("formExpDGear");
    var typeGear = document.getElementById("donationTypeGear");

    /* Sets Both Form's Info to the same incase customer wants to use it for gear */
    useInfo.onclick = function() {
        fNameGear.value = fNameDonation;
        MiddleIGear.value = MiddleIDonation;
        lNameGear.value = lNameDonation;
        addressGear.value = addressDonation;
        addressGear2.value = addressDonation2;
        cityGear.value = cityDonation;
        stateGear.value = stateDonation;
        zipGear.value = zipDonation;
        emailGear.value = emailDonation;
        phoneGear.value = phoneDonation;
        cardGear.value = cardDonation;
        CVCGear.value = CVCDonation;
        monthGear.value = monthDonation;
        yearGear.value = yearDonation;
        typeGear.value = typeOfDonation;
    }
}