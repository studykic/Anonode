let va = 0;

console.log(va);
function a() {
	va = ++va;
	requestAnimationFrame(a);
}

requestAnimationFrame(a);

// export { va };

// console.log(va);
