console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
async function f (a) {
    return await Promise.resolve(1 + a);
}

f(78).then(console.log);