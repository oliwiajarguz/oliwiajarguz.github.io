let div = document.createElement('div', "dane-programisty");
document.body.appendChild(div);

let btnGetData= document.getElementById('get-data');
const getData =()=>{
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(res=>res.json()
    .then(data =>{

        div.innerHTML = '';

        let imie= document.createElement('p');
        let srname= document.createElement('p');
        let job= document.createElement('p');
        let firm= document.createElement('p');
        let hr = document.createElement('hr');

        imie.innerText = ` Imię : ${data.imie}`;
        srname.innerText = `Nazwisko: ${data.nazwisko}`;
        job.innerText = `Zawód: ${data.zawod}`;
        firm.innerText = `Firma: ${data.firma}`;


        div.appendChild(imie);
        div.appendChild(srname);
        div.appendChild(job);
        div.appendChild(firm);
        div.appendChild(hr);

        console.log(div);
       

      
    })
    
    
    
    )};
    btnGetData.addEventListener('click', getData);
