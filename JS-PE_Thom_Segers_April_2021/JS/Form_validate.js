var errors = [];
var txt = "";

const Voornaam = document.getElementById("Voornaam");
const Achternaam = document.getElementById("Achternaam");
const Gebruikersnaam = document.getElementById("Gebruikersnaam");
const Email = document.getElementById("E-mailadres"); 
const Wachtwoord = document.getElementById("Wachtwoord");
const HWachtwoord = document.getElementById("Herhaal-Wachtwoord");
const Adres = document.getElementById("Adres");
const Land = document.getElementById("Land");
const Provincie = document.getElementById("Provincie");
const Postcode = document.getElementById("Postcode");
const Voorwaarden = document.getElementById("Voorwaarden");
const Banking = document.getElementById("Banking-app");
const Overschrijving = document.getElementById("Overschrijving");
const Visa = document.getElementById("Visa");
const Paypal = document.getElementById("Paypal");


const Danger = document.getElementById("Danger");
const Info = document.getElementById("Info");
const Success = document.getElementById("Success");


const form = document.getElementById("myForm");

form.addEventListener("submit", function(event)
{
    event.preventDefault();
    checkForm();
});

function checkForm()
{

    txt = "";
    popErrors();
    document.getElementById("Danger-p").innerHTML = txt;
    
    checkEmptyField(Voornaam.value, Voornaam.id);

    checkEmptyField(Achternaam.value, Achternaam.id);

    checkEmptyField(Gebruikersnaam.value, Gebruikersnaam.id);

    validateEmail(Email.value);

    validateWachtwoord(Wachtwoord, HWachtwoord);

    checkEmptyField(Adres.value, Adres.id);

    validateLand(Land.value);

    validateProvincie(Provincie.value);

    checkPC(Postcode.value);

    checkCheckbox(Voorwaarden);

    validatiePayment(Banking);
    validatiePayment(Overschrijving);
    validatiePayment(Visa);
    validatiePayment(Paypal);


    if(errors.length == 0)
    {
        Success.style.display = "block";
        Info.style.display = "block";
        Danger.style.display = "none";
    }
    else
    {
        Danger.style.display = "block";
        Info.style.display = "block";
        
        Success.style.display = "none";

        errors.forEach(writeErrors);
        document.getElementById("Danger-p").innerHTML = txt;
    }
    
}

function checkEmptyField(value, name)
{
    if(value == "")
    {
        errors.push("Het veld " + name + " is vereist.");
    }
}


function validateEmail(field)
{
    const pattern = /^[^ ]+@[^ ]+.[a-z]{2,3}$/
    if(!pattern.test(field))
    {
        errors.push("E-mailadres is niet correct.");
    }
}

function validateWachtwoord(value1, valueH)
{
    checkEmptyField(value1.value, value1.id);
    checkEmptyField(valueH.value, valueH.id);
    if(value1.value != valueH.value )
    {
        errors.push("De wachtwoorden zijn niet hetzelfde.");
    }

    if(value1.length <= 7 || valueH.length <=7)
    {
        errors.push("Het wachtwoord moet minstens 8 tekens lang zijn.");
    }
}

function validateLand(value)
{
    if(value == "")
    {
        errors.push("Kies een land.");
    }
}

function validateProvincie(value)
{
    if(value == "")
    {
        errors.push("Kies een Provincie.");
    }
}

function checkPC(value)
{
    if(value <= 1000 || value >= 10000)
    {
        errors.push("De waarde van postcode moet tussen de 1000 en 10000 liggen.")
    }
}

function checkCheckbox(value)
{
    if(value.checked == false)
    {
        errors.push("U moet de voorwaarden accepteren!");
    }
}

function validatiePayment(value)
{
    if(value.checked == true)
    {
        document.getElementById("Info-p").innerHTML = "Je betalings wijze is " + value.id + "."
    }
}

function writeErrors(Value)
{
    txt += Value + "<br>";
}

function popErrors()
{
    for(length = errors.length; length > 0; --length)
    {
        errors.pop();
    }
}

