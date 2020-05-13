function whichIsLarger(f, g) {
	if(f() > g()) {
      return "f";
    }
   else if (f() < g()) {
			return "g"; 
		}
	else {
		return "neither";
	}
}

//testing: 
console.log(whichIsLarger(()=>5, ()=>10));
console.log(whichIsLarger(()=>10, ()=>5));
console.log(whichIsLarger(()=>25, ()=>25));
console.log(whichIsLarger(()=>-100, ()=>-100));
console.log(whichIsLarger(()=>-100, ()=>0));
console.log(whichIsLarger(()=>505050, ()=>5050));
console.log(whichIsLarger(()=>100, ()=>1000));