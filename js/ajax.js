$(document).on("click", ".starter-button", function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/comments",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var emailsHtml = "";
            data.forEach(function (value, key) {
                emailsHtml = emailsHtml + `
                <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${value.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${value.email}</h6>
    <p class="card-text">${value.body}</p>
  </div>
</div>`
            })
            $(".contentArea").html(emailsHtml)
        },
    })
})


// $(document).ready(function () {
//     var x = {
//        emily : 17,
//        alex : 18,
//        abigail : 16,
//        george : 63,
//        sebastian : 19,
//        elliott : 20,
//        robin : 30,
//        demetrius : 32,
//        pierre : 40,
//        harvey : 28,

//     }
//     x["eleman"] = 15
//     console.log(x)



// var sayilar1 = [
//     1,
//     3,
//     8,
//     4,
//     2,
//     9,
//     7,
// ];

// var sayilar2 = [

// ]

// sayilar1.forEach(function (value, key) {
//     sayilar2.push(value + 1)
// })

// console.log({"s2": sayilar2});




// })


// $(document).ready(function () {

//     var damla = {
//         "sevdiği renkler": [
//             "siyah",
//             "mavi",
//         ],
//         "sevdiği hayvanlar": {
//             "kedi": {
//                 "yavru": ["siyah", "gri"],
//                 "yetişkin": ["beyaz", "turuncu"]
//             },
//             "kuş": {
//                 "papağan": ["cockatiel", "kakadu"],
//                 "muhabbet kuşu": ["yeşil", "beyaz", "mavi"]
//             }
//         },

//     }

//     console.log(damla["sevdiği hayvanlar"]["kuş"]["muhabbet kuşu"][1])


// })



