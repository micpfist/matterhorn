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
    if (i==4) {
        window.close();
    }
    if (Check != 'Tidi') {
        alert('Try Again');
    }
    else {
        alert('well done');
        break;
    }
    
    }

