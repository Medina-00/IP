let info = document.getElementById('info');

document.getElementById('btn').addEventListener('click', function() {
  console.log('Button clicked');
  fetch('https://ipinfo.io/json?token=fd09599343546e')
  .then(response => response.json())
  .then(data => {
    const flagUrl = `https://flagsapi.com/${data.country}/flat/64.png`
    info.style.border = '5px solid white';
    info.innerHTML = `
    <img src="${flagUrl}" alt="Bandera de ${data.country}" />
    <h3>Información de tu IP ${data.ip}</h3>
    <p>Ubicación: ${data.city}, ${data.region}, ${data.country}</p>
    <p>Codigo Postal: ${data.postal}</p>
    `
    console.log('Tu IP pública es:', data);
  })
  .catch(error => {
    console.error('Error al obtener la IP:', error);
  });

});