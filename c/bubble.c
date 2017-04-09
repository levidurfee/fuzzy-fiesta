#include <stdlib.h>
#include <stdio.h>
#include <math.h>

void show_array(int numbers[], int size);

int main() {
	int iteration = 0;
	int swap = 0;
	int numbers[] = {
		90,
		80,
		10,
		70,
		55,
		43
	};

	int n = sizeof(numbers) / sizeof(int);

	show_array(numbers, n);

	do {
		for(int i=0; i<n; i++) {
			if(i == n) {
				continue;
			}
			if(numbers[i] > numbers[i + 1]) {
				int large = numbers[i];
				int small = numbers[i + 1];

				numbers[i] = small;
				numbers[i + 1] = large;

				swap = 1;
			}

			iteration++;

			if(iteration >= pow(n, 2)) {
				swap = 0;
			}
		}
	} while(swap == 1);

	show_array(numbers, n);

	return 0;
}

void show_array(int numbers[], int size) {
	for(int i=0; i<size; i++) {
		printf("%i\n", numbers[i]);
	}
}
