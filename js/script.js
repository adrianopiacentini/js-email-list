const list = document.getElementById('list')

function test () {
for (i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((resp) => {
        list.innerHTML += `<li><span>${resp.data.response}</span></li>`
    })
}}

test()

// list.innerHTML += `<li><span>${resp.data.response}</span></li>`