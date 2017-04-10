# bubble

## compile

gcc bubble.c -lm -o bubble

## debug

gcc -ggdb -ansi -Wall -pedantic -o bubble bubble.c; valgrind -v --leak-check=full ./bubble