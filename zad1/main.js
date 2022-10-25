let btngetData= document.getElementById('get-data');
const getData =()=>{
    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(res=>res.json()
    .then(data =>{
        let imie= document.createElement('p');
        let srname= document.createElement('p');
        let job= document.createElement('p');
        let firm= document.createElement('p');
        let hr = document.createElement('hr');

        imie.innerText = `Post ID: ${data.imie}`;
        srname.innerText = `Post ID: ${data.nazwisko}`;
        job.innerText = `Post ID: ${data.zawod}`;
        firm.innerText = `Post ID: ${data.firma}`;


        let Div = document.createElement('div', "dane-programisty");
        Div.appendChild(imie);
        document.body.appendChild(imie);
        Div.appendChild(srname);
        document.body.appendChild(srname);
        Div.appendChild(job);
        document.body.appendChild(job);
        Div.appendChild(firm);
        document.body.appendChild(firm);
        console.log(Div);
       
       
      
    })
    
    
    
    )};
    btngetData.addEventListener('click', getData);
