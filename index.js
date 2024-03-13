function search(){
    const text ="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, laborum ea. Expedita fugiat ad sunt quo totam. Accusamus quia rerum saepe sed totam aperiam sit, quis voluptatibus atque officiis praesentium!";
    var textchk = prompt("Enter The Text To Search");

    if (text.toLocaleLowerCase().includes(textchk.toLocaleLowerCase())) {
        alert("text found")
    }else{
        alert("Text Not Found");
    }
}