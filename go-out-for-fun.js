/* 
Password Check function


Check = prompt('Enter password', '');
if (Check != 'Tidi') {
    for (i, i < 10, i++) {
        Check = prompt('Enter password', '');
    }
else
    {
        alert('Well done');
    }

    */

for (i = 1; i <= 4; i++) {
    Check = prompt('Enter Password');
    if (Check != 'Tidi') {
        if (i == 4) {
            window.close();
        }
        else {
            if (i == 3) {
                alert('Last Chance');
            }
            else {
                alert('Try Again');
            }
        }
    }
    else {
        alert('Well Done');
        break;
    }
}

/* for the input field */
function myFunction() {
    var x = document.getElementById('myText').value;
    document.getElementById('demo').innerHTML = x;
}
