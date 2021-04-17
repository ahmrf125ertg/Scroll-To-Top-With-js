

const mybutn = document.getElementById('go-up');

window.onscroll =  (e) => {

    if (window.pageYOffset >= 400) {

        mybutn.style.display = 'block';

    }else {
        mybutn.style.display = 'none';
    }

    
    
}

mybutn.onclick = (e) => {

    window.scrollTo(0,0);
    
};