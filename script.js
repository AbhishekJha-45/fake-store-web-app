fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
        tableData += ` <tr id="table_body">
                    <td>${values.title}</td>
                    <td>${values.description}</td>
                    <td>${values.price}</td>
                    <td><img src="${values.image}" loading='lazy' draggable="false"/></td>
                </tr>`
    })
    document.getElementById('table_body').innerHTML = tableData;
})
