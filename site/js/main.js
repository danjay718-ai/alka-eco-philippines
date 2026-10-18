const b=document.querySelector('.menu');b.addEventListener('click',()=>{const open=document.querySelector('.links').classList.toggle('open');b.setAttribute('aria-expanded',open);b.textContent=open?'Close ×':'Menu ☰'});const f=document.querySelector('form');if(f){const key=new URLSearchParams(location.search).get('interest');const choices={'alkaline-hydrolysis':'Alkaline hydrolysis','energy-recall':'Energy recall systems','environmental-applications':'Environmental applications'};if(choices[key])f.elements.interest.value=choices[key]}if(f)f.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(f);const body=`Name: ${data.get('name')}
Organisation: ${data.get('company')}
Email: ${data.get('email')}
Interest: ${data.get('interest')}

${data.get('message')}`;location.href='mailto:info@alka-eco.com?subject='+encodeURIComponent('Philippine enquiry — '+data.get('interest'))+'&body='+encodeURIComponent(body);document.querySelector('#status').textContent='Your email application will open with your enquiry. Please review and send it there.'});
