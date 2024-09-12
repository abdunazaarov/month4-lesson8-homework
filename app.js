// 1 - Masala


// {
//     // Fibonacci sonlari


//     function isFibonacci(number) {
//         let a = 0, b = 1;
//         while (b < number) {
//         let temp = a;
//         a = b;
//         b = temp + b;
//         }
//         return b === number;
//     }
        
//     console.log(isFibonacci(21));

// }

// -------------------------------------------------------------------

// 2 - Masala


// {

//     // Accum funksiyasi


//     function accum(s) {
//         return s
//           .split('') 
//           .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
//           .join('-');
//       }

//       console.log(accum("abcd")); 
//       console.log(accum("RqaEzty")); 
//       console.log(accum("cwAt"));
// }

// -------------------------------------------------------------------------

// 3 - Masala


// {

//     // Ikkita eng kichik musbat sonlarning yig’indisini topish


//     function sumTwoSmallestNumbers(numbers) {
//         let [a, b] = numbers.sort((a, b) => a - b); 
//         return a + b; 
//       }
      
//       console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); 
//       console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); 

// }

// -----------------------------------------------------------------------------

// 4 - Masala


// {

//     // Ikki son orasidagi barcha sonlar yig’indisi


//     function getSum(a, b) {
//         let min = Math.min(a, b);
//         let max = Math.max(a, b); 
//         let sum = 0;
      
//         for (let i = min; i <= max; i++) {
//           sum += i; 
//         }
      
//         return sum;
//       }
      
//       console.log(getSum(1, 0)); 
//       console.log(getSum(1, 2)); 
//       console.log(getSum(0, 1)); 
//       console.log(getSum(1, 1)); 
//       console.log(getSum(-1, 0)); 
//       console.log(getSum(-1, 2)); 
// }

// ------------------------------------------------------------------


// 5 - Masala


// {

//     // Berilgan stringning oxirgi to’rtta belgisidan tashqari barcha belgilarni # bilan almashtiradi.


//     function maskify(str) {
//         if (str.length <= 4) {
//             return str;
//         }
//         let maskedPart = '#'.repeat(str.length - 4);
//         let lastFourChars = str.slice(-4);
//         return maskedPart + lastFourChars;
//     }
    
//     console.log(maskify("4556364607935616")); 
//     console.log(maskify("64607935616"));
// }

// --------------------------------------------------------------------------

// 6 - Masala


// {

//     // Ikkita sonni qo’shib, ularning yig’indisini ikkilik (binary) ko’rinishda qaytaradi.


//     function addBinary(a, b) {
//         let sum = a + b;
//         return sum.toString(2);
//     }
    
//     console.log(addBinary(1, 1)); 
//     console.log(addBinary(5, 9)); 
// }

// ---------------------------------------------------------------------------

// 7 - Masala


// {

//     // Ikki stringni birlashtirib, faqat noyob harflarni o’sish tartibida qaytaradi.


//     function longest(s1, s2) {
//         let combined = s1 + s2;
//         let uniqueLetters = '';
//         for (let char of combined) {
//             if (!uniqueLetters.includes(char)) {
//                 uniqueLetters += char;
//             }
//         }
//         return uniqueLetters.split('').sort().join('');
//     }
    
//     console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); 
// }

// ------------------------------------------------------------------------------------











const tickSound = new Audio('tick.mp3');

function updateClock() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date();


    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
    const day = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    dateElement.textContent = `${day}, ${date} ${month} ${year}`;

    tickSound.play();
}

setInterval(updateClock, 1000);

updateClock();
