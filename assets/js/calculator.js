const rate = 3.20;
const d = new Date();
const month = d.getMonth() + 1;
const year = d.getFullYear();

// Month, Year
const calvin = [10, 2024];
const omar = [4, 2024];
const web = [1, 2024];
const michael = [6, 2024];
const yeram = [10, 2023];


function calculate(person) {
    const ydiff = year - person[1];
    const mdiff = month - person[0];
    const diff = mdiff + ydiff * 12;
    
    return (diff * rate).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
;
}

document.getElementById("calvin").textContent = calculate(calvin);
document.getElementById("michael").textContent = calculate(michael);
document.getElementById("omar").textContent = calculate(omar);
document.getElementById("web").textContent = calculate(web);
document.getElementById("yeram").textContent = calculate(yeram);
