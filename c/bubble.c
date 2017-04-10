#include <stdlib.h>
#include <stdio.h>
#include <math.h>

void show_array(int numbers[], int size);

int main() {
    int swap, iteration, i, large, small = 0;
    int numbers[] = {
        90,
        80,
        10,
        70,
        55,
        43
    };

    int n = sizeof(numbers) / sizeof(int) - 1;

    int max_iteration = (int) pow(n, 2);

    printf("Before: \n");
    show_array(numbers, n + 1);

    do {
        for(i=0; i<n; i++) {
            if(i >= n) {
                continue;
            }

            if(numbers[i] > numbers[i + 1]) {
                large = numbers[i];
                small = numbers[i + 1];

                numbers[i] = small;
                numbers[i + 1] = large;

                swap = 1;
            }

            iteration++;

            if(iteration >= max_iteration) {
                swap = 0;
            }
        }
    } while(swap == 1);

    printf("\nAfter: \n");
    show_array(numbers, n + 1);

    return 1;
}

void show_array(int numbers[], int size) {
    int i;
    for(i=0; i<size; i++) {
        printf("%i\n", numbers[i]);
    }
}
