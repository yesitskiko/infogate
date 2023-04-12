$(document).ready(function() {
    fetch('list.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the objects in the JSON data
        var tI = 500
        data.forEach(item => {
        // Do something with each object, for example:
            var photo = "https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
            if(item.Image != "")
            {
                photo = item.Image
            }
            setTimeout(function() {
                $(".suspect__list").append(`
<div class="suspect__object roll-in-blurred-left">
    <img style="height: 150px !important; width: 150px !important; object-fit: cover; display: block; margin-left: auto; margin-right: auto; position: relative; top: 20px;" src="` + photo + `" alt="">
    <h3>` + item.Name + `</h3>
    <button onclick="location.href='` + item.Link + `'">Ratsit</button>
</div>
            `)
            }, tI)
            tI += 500
        });
    })
    .catch(error => console.error(error));
})