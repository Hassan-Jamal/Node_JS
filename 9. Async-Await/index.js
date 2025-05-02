function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayedGreet(name) {
  await delayFn(2000);
  console.log(name);
}

delayedGreet("Hassan Jamal");

async function DivideFn(num1, num2) {
  try {
    if (num2 == 0) {
      throw new Error("Cannot divide by zero");
    }
    else{
    return num1 / num2;
    }
  } catch (error) {
    console.error("Error Occur", error);
    return null;
  }
}

async function mainFn(){
    console.log(await DivideFn(6,3));
    console.log(await DivideFn(6,0));
}

mainFn();