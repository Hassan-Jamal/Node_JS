function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

console.log("Promise Lecture Started...");
delayFn(2000).then(() => console.log("After 2 second Promise Resolved"));
console.log("Lecture end");

function divideFn(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 == 0) {
      reject("Cannot Divide any Number By zero\n");
    } else {
      resolve(num1 / num2);
    }
  });
}

divideFn(4, 0)
  .then((result) => console.log(result))
  .catch((error) => console.log(error, "Error Occur"));
