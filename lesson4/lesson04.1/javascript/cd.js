const options={day: 'long', day: 'numeric', month: 'name', year: 'numeric'};

document.getElementById('cd').textContent=new Date().toLocaleDateString('en-US', options);