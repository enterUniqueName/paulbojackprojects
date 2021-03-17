var number_array = [17, 24, 13, 6, 15, 30, 3, 19, 27, 4, 31, 12, 1, 20, 23, 5, 18, 29, 7, 10, 26, 14, 25, 9, 28, 16, 8, 22, 2, 11, 21]

var day_array = ['Thursday', 'Monday', 'Sunday', 'Tuesday', 'Saturday', 'Friday', 'Wednesday']

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function assign_dates() {
    document.getElementById("date-zero").innerHTML = number_array[0];
    document.getElementById("date-one").innerHTML = number_array[1];
    document.getElementById("date-two").innerHTML = number_array[2];
    document.getElementById("date-three").innerHTML = number_array[3];
    document.getElementById("date-four").innerHTML = number_array[4];
    document.getElementById("date-five").innerHTML = number_array[5];
    document.getElementById("date-six").innerHTML = number_array[6];

    document.getElementById("date-seven").innerHTML = number_array[7];
    document.getElementById("date-eight").innerHTML = number_array[8];
    document.getElementById("date-nine").innerHTML = number_array[9];
    document.getElementById("date-ten").innerHTML = number_array[10];
    document.getElementById("date-eleven").innerHTML = number_array[11];
    document.getElementById("date-twelve").innerHTML = number_array[12];
    document.getElementById("date-thirteen").innerHTML = number_array[13];

    document.getElementById("date-fourteen").innerHTML = number_array[14];
    document.getElementById("date-fifteen").innerHTML = number_array[15];
    document.getElementById("date-sixteen").innerHTML = number_array[16];
    document.getElementById("date-seventeen").innerHTML = number_array[17];
    document.getElementById("date-eighteen").innerHTML = number_array[18];
    document.getElementById("date-nineteen").innerHTML = number_array[19];
    document.getElementById("date-twenty").innerHTML = number_array[20];

    document.getElementById("date-twentyone").innerHTML = number_array[21];
    document.getElementById("date-twentytwo").innerHTML = number_array[22];
    document.getElementById("date-twentythree").innerHTML = number_array[23];
    document.getElementById("date-twentyfour").innerHTML = number_array[24];
    document.getElementById("date-twentyfive").innerHTML = number_array[25];
    document.getElementById("date-twentysix").innerHTML = number_array[26];
    document.getElementById("date-twentyseven").innerHTML = number_array[27];

    document.getElementById("date-twentyeight").innerHTML = number_array[28];
    document.getElementById("date-twentynine").innerHTML = number_array[29];
    document.getElementById("date-thirty").innerHTML = number_array[30];
}

function assign_days() {
    document.getElementById("day-zero").innerHTML = day_array[0];
    document.getElementById("day-one").innerHTML = day_array[1];
    document.getElementById("day-two").innerHTML = day_array[2];
    document.getElementById("day-three").innerHTML = day_array[3];
    document.getElementById("day-four").innerHTML = day_array[4];
    document.getElementById("day-five").innerHTML = day_array[5];
    document.getElementById("day-six").innerHTML = day_array[6];
}

function assign_blanks() {
    document.getElementById("date-blank-1").innerHTML = number_array[31];
    document.getElementById("date-blank-2").innerHTML = number_array[32];
    document.getElementById("date-blank-3").innerHTML = number_array[33];
    document.getElementById("date-blank-4").innerHTML = number_array[34];
}

function assign_days_as_numbers() {
    document.getElementById("day-zero").innerHTML = number_array[35];
    document.getElementById("day-one").innerHTML = number_array[36];
    document.getElementById("day-two").innerHTML = number_array[37];
    document.getElementById("day-three").innerHTML = number_array[38];
    document.getElementById("day-four").innerHTML = number_array[39];
    document.getElementById("day-five").innerHTML = number_array[40];
    document.getElementById("day-six").innerHTML = number_array[41];
}
