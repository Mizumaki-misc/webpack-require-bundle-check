if (process.env.ENV1 === "statham") {
  console.log("inside env1");
}

const env2 = process.env.ENV2;
if (env2 === "statham") {
  console.log("inside env2");
}

console.log("hello world");
