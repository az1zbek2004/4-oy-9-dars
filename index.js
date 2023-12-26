// ----------1-masala
// 1. Berilgan massivning ichidan berilgan qiymat bor yoki yoqligini tekshiruvchi funksiya yozing
//   let arr=[21, 32, 22, 19, 33];

//   const selection = (arg) => {
//    return arg.includes(32);
//   }

// console.log(selection(arr));

// ----------2-masala
// 2. Quyidagi kabi obyektlardan tashkil topgan massiv berilganda uning ichidan berilgan qiymatlarga mos keluvhi funksiya yozing


// const products = [
//   { id: 1, name: 'Laptop', brand: 'Dell', price: 999.99 },
//   { id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 },
//   { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 },
//   { id: 4, name: 'Desktop', brand: 'HP', price: 1199.99 },
// ];

// function filterProducts(arr, key, value) {
//   return arr.filter(v => {
//     return v[key] == value;
//   });
// }

// console.log(filterProducts(products, 'name', 'Tablet'));
// // [ { id: 3, name: 'Tablet', brand: 'Apple', price: 499.99 } ]

// console.log(filterProducts(products, 'price', 699.99));
// // [{ id: 2, name: 'Smartphone', brand: 'Samsung', price: 699.99 }]



// ----------3-masala
// 3. Quyidagi kabi massiv berilganda uning ichidan yoshlarining o'rtachasini topuvchi funksiya yozing
// const students = [
//      { name: 'Alice', age: 22, grades: [85, 90, 92, 88] },
//      { name: 'Bob', age: 20, grades: [78, 85, 80, 88] },
//      { name: 'Charlie', age: 21, grades: [90, 92, 89, 94] },
//    ];

//    function studentMiddleAge(prm) {
//       return (prm[0].age+prm[1].age+prm[2].age)/prm.length;
//    }

//    console.log("Middle age of students: "+studentMiddleAge(students));



// ----------4-masala
// Quyidagi kabi massivni priority boyicha saralab beradigan funksiya yozing
// const tasks = [
//   { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
//   { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
//   { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
//   { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
// ];

// function sortTasksByPriority(tasks) {
//   const prioritiesOrder={Low:1, High:2, Medium:3};

//   tasks.sort((a, b) => {
//     return prioritiesOrder[a.priority]-prioritiesOrder[b.priority];
//   });
// }

// sortTasksByPriority(tasks);
// console.log(tasks);

/*
Should output:
[
  { taskName: 'Task C', priority: 'Low', deadline: '2023-03-01' },
  { taskName: 'Task A', priority: 'High', deadline: '2023-03-15' },
  { taskName: 'Task D', priority: 'High', deadline: '2023-03-20' },
  { taskName: 'Task B', priority: 'Medium', deadline: '2023-04-10' },
]
*/

// ----------5-masala
// Berilgan massivdan berilgan oraliqdan berilgan oraliqqacha bolgan qiymatlarni olib beruvchi funksiya yozing
// let arr = [21, 12, 33, 54, 61, 11, 2];

// function value(arg) {

//   return arg.slice(2, 6).join(", ");
// }

//   console.log(value(arr));


// 6- masala 


// 1. Fibonachchi sonlarini rekursiv funksiya yordamida hisoblang
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 

//   function findFibonachchi(num) {
//       if (num <= 1) {
//          return num;
//       }

//       return findFibonachchi(num-1)+findFibonachchi(num-2);
//    }

// num=10;
// for (let i = 0; i < num; i++) {
//     console.log(findFibonachchi(i));
// }




// 2. Massiv 1- dan n- elementgacha bo'lgan elementlar yig'indisini rekursiv funksiya yordamida hisoblang

// function findsum(num) {
//     if (num === 1) {
//        return 1;
//     }
//     let sum;
//     return sum=num+findsum(num-1)
//  }


// console.log(findsum(9));

