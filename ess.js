var civilityRecru = document.getElementsByName('civility_recru');
var nameRecru = document.getElementById('name-recru');
var firstNameRecru = document.getElementById('first-name-recru');
var mailRecru = document.getElementById('mail-recru');
var confirmMailRecru = document.getElementById('confirm-mail-recru');
var phoneRecru = document.getElementById('phone-recru');
var adressRecru = document.getElementById('adress-recru');
var cityRecru = document.getElementById('city-recru');
var postalCodeRecru = document.getElementById('postal-code-recru');
var studyRecru = document.getElementById('study-recru');
var lastDegreeRecru = document.getElementById('last-degree-recru');
var studentRecru = document.getElementById('student-recru');
var englishLevelRecru = document.getElementById('english-level-recru');
var startDateDayRecru = document.getElementById('start-date-day-recru');
var startDateMonthRecru = document.getElementById('start-date-month-recru');
var startDateYearRecru = document.getElementById('start-date-year-recru');
var endDateDayRecru = document.getElementById('end-date-day-recru');
var endDateMonthRecru = document.getElementById('end-date-month-recru');
var endDateYearRecru = document.getElementById('end-date-year-recru');
var cvRecru = document.getElementById('cv-recru');
var clRecru = document.getElementById('cl-recru');
var formRecru = document.getElementById('form-recru');





// Fonctions de vÃ©rification du formulaire, elles renvoient "true" si tout est ok
var check = {}; // On met toutes nos fonctions dans un objet littÃ©ral
check['civility_recru'] = function() {

      var civilityRecru = document.getElementsByName('civility_recru');

        if (civilityRecru[0].checked || civilityRecru[1].checked) {

            civilityRecru[0].className = 'form-recrut-correct';
            civilityRecru[1].className = 'form-recrut-correct';
            return true;
        } else {
            civilityRecru[0].className = 'form-recrut-incorrect';
            civilityRecru[1].className = 'form-recrut-incorrect';
            return false;
        }

};

check['name-recru'] = function() {

      var nameRecru = document.getElementById('name-recru');

      if (nameRecru.value.length >= 2) {
          nameRecru.className = 'form-recrut-correct';
          return true;
      } else {
          nameRecru.className = 'form-recrut-incorrect';
          return false;
      }

};
check['first-name-recru'] = function() {

        var firstNameRecru = document.getElementById('first-name-recru');

        if (firstNameRecru.value.length >= 2) {
            firstNameRecru.className = 'form-recrut-correct';
            return true;
        } else {
            firstNameRecru.className = 'form-recrut-incorrect';
            return false;
        }

};
check['mail-recru'] = function() {
        var regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        var mailRecru = document.getElementById('mail-recru');
        //alert("mail : "+ mailRecru);
        var testRegex = regexMail.test(mailRecru.value);
        //alert("test : "+ testRegex);
        if (regexMail.test(mailRecru.value)) {
            mailRecru.className = 'form-recrut-correct';
            return true;
        } else {
            mailRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['confirm-mail-recru'] = function() {

        var confirmMailRecru = document.getElementById('confirm-mail-recru');

        if (confirmMailRecru.value === mailRecru.value && confirmMailRecru.value != "") {
            confirmMailRecru.className = 'form-recrut-correct';
            return true;
        } else {
            confirmMailRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['phone-recru'] = function() {
        var regexphone = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
        var phoneRecru = document.getElementById('phone-recru');

        if (regexphone.test(phoneRecru.value)) {
            phoneRecru.className = 'form-recrut-correct';
            return true;
        } else {
            phoneRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['adress-recru'] = function() {

        var adressRecru = document.getElementById('adress-recru');

        if (adressRecru.value.length >= 1) {
            adressRecru.className = 'form-recrut-correct';
            return true;
        } else {
            adressRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['city-recru'] = function() {

        var cityRecru = document.getElementById('city-recru');

        if (cityRecru.value.length >= 1) {
            cityRecru.className = 'form-recrut-correct';
            return true;
        } else {
            cityRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['postal-code-recru'] = function() {
        var regexPostalCode = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
        var postalCodeRecru = document.getElementById('postal-code-recru');

        if (regexPostalCode.test(postalCodeRecru.value)) {
            postalCodeRecru.className = 'form-recrut-correct';
            return true;
        } else {
            postalCodeRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['study-recru'] = function() {

        var studyRecru = document.getElementById('study-recru');

        if (studyRecru.options[studyRecru.selectedIndex].value != 'none') {
            studyRecru.className = 'form-recrut-correct';
            return true;
        } else {
            studyRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['student_recru'] = function() {

      var studentRecru = document.getElementsByName('student_recru');

        if (studentRecru[0].checked || studentRecru[1].checked) {
            studentRecru[0].className = 'form-recrut-correct';
            studentRecru[1].className = 'form-recrut-correct';
            return true;
        } else {
            studentRecru[0].className = 'form-recrut-incorrect';
            studentRecru[1].className = 'form-recrut-incorrect';
            return false;
        }

};


check['start-date-day-recru'] = function() {

        var startDateDayRecru = document.getElementById('start-date-day-recru');

        if (startDateDayRecru.options[startDateDayRecru.selectedIndex].value != 'none') {
            startDateDayRecru.className = 'form-recrut-correct';
            return true;
        } else {
            startDateDayRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['english-level-recru'] = function() {

        var englishLevelRecru = document.getElementById('english-level-recru');

        if (englishLevelRecru.options[englishLevelRecru.selectedIndex].value != 'none') {
            englishLevelRecru.className = 'form-recrut-correct';
            return true;
        } else {
            englishLevelRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['start-date-month-recru'] = function() {

        var startDateMonthRecru = document.getElementById('start-date-month-recru');

        if (startDateMonthRecru.options[startDateMonthRecru.selectedIndex].value != 'none') {
            startDateMonthRecru.className = 'form-recrut-correct';
            return true;
        } else {
            startDateMonthRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['start-date-year-recru'] = function() {

        var startDateYearRecru = document.getElementById('start-date-year-recru');

        if (startDateYearRecru.options[startDateYearRecru.selectedIndex].value != 'none') {
            startDateYearRecru.className = 'form-recrut-correct';
            return true;
        } else {
            startDateYearRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['end-date-day-recru'] = function() {

        var endDateDayRecru = document.getElementById('end-date-day-recru');

        if (endDateDayRecru.options[endDateDayRecru.selectedIndex].value != 'none') {
            endDateDayRecru.className = 'form-recrut-correct';
            return true;
        } else {
            endDateDayRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['end-date-month-recru'] = function() {

        var endDateMonthRecru = document.getElementById('end-date-month-recru');

        if (endDateMonthRecru.options[endDateMonthRecru.selectedIndex].value != 'none') {
            endDateMonthRecru.className = 'form-recrut-correct';
            return true;
        } else {
            endDateMonthRecru.className = 'form-recrut-incorrect';
            return false;
        }

};

check['end-date-year-recru'] = function() {

        var endDateYearRecru = document.getElementById('end-date-year-recru');

        if (endDateYearRecru.options[endDateYearRecru.selectedIndex].value != 'none') {
            endDateYearRecru.className = 'form-recrut-correct';
            return true;
        } else {
            endDateYearRecru.className = 'form-recrut-incorrect';
            return false;
        }

};



// Mise en place des Ã©vÃ©nements

(function() { // Utilisation d'une IIFE pour Ã©viter les variables globales.

    var formRecru = document.getElementById('form-recru');
        inputs = document.querySelectorAll('input[type=text],input[type=email],input[type=tel],input[type=number]'),
        inputsLength = inputs.length;


    for (var i = 0; i < inputsLength; i++) {

        inputs[i].addEventListener('keyup', function(e) {
            check [e.target.id]();
        });
    }



      inputsRadio = document.querySelectorAll('input[type=radio]'),
      inputsRadioLength = inputsRadio.length;


    for (var j = 0; j < inputsRadioLength; j++) {

        inputsRadio[j].addEventListener('change', function(l) {
            check [l.target.name]();
        });
    }

    inputsSelect = document.querySelectorAll('select'),
    inputsSelectLength = inputsSelect.length;


  for (var h = 0; h < inputsSelectLength; h++) {

      inputsSelect[h].addEventListener('change', function(m) {
          check [m.target.id]();
      });
  }



    formRecru.addEventListener('submit', function(e) {

        var result = true;

        for (var i in check) {
            result = check[i](i) && result;

        }

        if (result) {
            //alert('Le formulaire est bien rempli.');
        }else{
          e.preventDefault();

        }




    });



})();
