const ul = document.querySelector('.people');

const people = ['meek','jerop','karan','gillian','badria'];

let html = ``;

people.forEach(person => {
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;