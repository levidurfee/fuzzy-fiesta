class BubbleSort {
	static sort(numbers) {
		let iteration = 0;
		let swap = false;
		do {
			for(let i=0; i<numbers.length; i++) {
				if(!numbers[i + 1]) {
					continue;
				}
				if(numbers[i] > numbers[i + 1]) {
					let large = numbers[i];
					let small = numbers[i + 1];

					numbers[i] = small;
					numbers[i + 1] = large;
					swap = true;
				}
			}

			iteration++;

			if(iteration >= Math.pow(numbers.length, 2)) {
				swap = false;
			}
			
		}
		while(swap);

		return numbers;
	}
}

let numbers = [
	90,
	80,
	10,
	70,
	55,
	43,
];

console.log('Before', numbers);

numbers = BubbleSort.sort(numbers);
console.log('After', numbers);
