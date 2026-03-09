1️⃣ Difference between var, let, and const

var: এটি পুরোনো JavaScript variable declaration। এটি function scoped এবং একই variable আবার declare করা যায়।

let: এটি block scoped। একই block এর ভিতরে আবার declare করা যায় না, কিন্তু value change করা যায়।

const: এটিও block scoped। একবার declare করলে value change করা যায় না এবং আবার declare করা যায় না।

2️⃣ What is the Spread Operator (...)

Spread operator (...) ব্যবহার করা হয় array বা object এর elements কে expand বা copy করার জন্য।

Example:

const arr1 = [1,2,3];
const arr2 = [...arr1,4,5];

এখানে ...arr1 ব্যবহার করে arr1 এর সব element নতুন array তে copy করা হয়েছে।

3️⃣ Difference between map(), filter(), and forEach()

map(): প্রতিটি element এর উপর operation করে এবং নতুন array return করে।

filter(): condition অনুযায়ী element select করে এবং নতুন array return করে।

forEach(): শুধু loop করার জন্য ব্যবহার হয়, এটি কোনো নতুন array return করে না।

Example:

arr.map()
arr.filter()
arr.forEach()

4️⃣ What is an Arrow Function

Arrow function হলো JavaScript এর একটি short syntax function।

Example:

const add = (a,b) => a + b;

এটি normal function এর short version।

5️⃣ What are Template Literals

Template literals ব্যবহার করা হয় string এর ভিতরে variable বা expression সহজে বসানোর জন্য। এটি backtick ` ` দিয়ে লেখা হয়।

Example:

const name = "Rahim";
const text = `My name is ${name}`;