const container = document.querySelector('.container');

for (let i=0; i<64; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j=0; j<64; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
    }
    container.appendChild(row);
}

