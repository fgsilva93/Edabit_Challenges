function smashFactor(bs, cs) {
	var num = (bs/cs).toFixed(2)
	return Number(num);
}

//testing variables
console.log(smashFactor(139.4, 93.8))
console.log(smashFactor(181.2, 124.5))
console.log(smashFactor(154.7, 104.3))