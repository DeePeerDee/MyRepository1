let age = 15;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not eligible");
}

let temparature = 25;
if (temparature < 0) {
    console.log("It is freezing!");
} else if (temparature >= 0 && temparature < 20) {
    console.log("It is cool outside.")
} else if (temparature >=20 && temparature < 26) {
    console.log("It's warm outside.");
} else {
    console.log("It's hot!");
}

let day = 'Monday';

switch (day) {
    case 'Monday':
        console.log("Today is Monday");
        break;
    case 'Friday':
        console.log("Today is Friday");
        break;
    default:
        console.log("Neither M nor F");
}
