const options={day: 'long', days: 'numeric', month: 'name', year: 'numeric'};

document.getElementById('cd').textContent=new Date().toLocaleDateString('en-US', options);