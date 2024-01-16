

fetch("https://www.nevadacyberclub.com/discord-redirect/invite-link.txt"/*, 
      {headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }}{mode: "no-cors"}*/).then((response) => {
  if (response.ok) {
    return response.text();
  }
  else{
    console.log(response)
    const message = document.querySelector('.message');
    message.innerText = 'Failed to redirect, try again or contact administrator.';
  }
})
.then((data) => {
  console.log(data)
  location.replace(data)
})
