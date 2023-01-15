function getval_from_email() {


    x = document.getElementById('uname').value;
    var v = x.search('@');
    if (v == -1) {
        document.getElementById('hide').style.display = 'inline';
    } else {

        document.getElementById('hide').style.display = 'none';
    }



}