# bubble

## compile

gcc bubble.c -lm -o bubble

gcc bubble.c -ggdb -lm -o bubble

## debug

valgrind --track-origins=yes ./bubble

gcc -ggdb -ansi -Wall -pedantic -o bubble bubble.c; valgrind --track-origins=yes -v --leak-check=full ./bubble
