  
  
function buscar() {
  const id = document.getElementById('inputId').value;
  const status = document.getElementById('status');
  const location = document.getElementById('location');
  const estimate = document.getElementById('estimate');

  if(!id){
    alert('Please enter a Valid Number');
    return;
  };
  
  fetch(`/track/${id}`)
    .then(res => res.json())
    .then(data => {
       status.innerText= ` Status : ${data.status}`
       location.innerText =` Location : ${data.location}`
       estimate.innerText = `Delivery Date : ${data.estimatedDelivery}`
    })
    .catch(err=>{
      console.error(err);
      location.innerText = ('Error Tracking this number')
    });
}


