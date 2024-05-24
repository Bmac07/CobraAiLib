let array = [1,2,3,4,5]

// sends array to server
function send(data,func){
  let myArray = data;

  let fettyp = '/' + func 
  
  fetch(fettyp, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: myArray })
  })
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.error(error));

}


async function promptai(datar) {
  
    var ed = await send(info,'promptai');
  console.log(ed)

}

promptai(array)
