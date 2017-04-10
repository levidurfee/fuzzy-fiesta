<?php

class Fiesta {
    public $count;
    public function __construct() {
        $this->count = 0;
    }
    public function factorial($number, $accumulator) {
        if($number === 0) {
            return $accumulator;
        }
        return $this->factorial($number - 1, $number * $accumulator);
    }

    public function bubbleSort(array $numbers) {
        $swapped = false;
        do {
            for($i=0;$i<count($numbers);$i++) {
                if(!isset($numbers[$i + 1])) {
                    continue;
                }
                if($numbers[$i] > $numbers[$i + 1]) {
                    $large = $numbers[$i];
                    $small = $numbers[$i + 1];

                    $numbers[$i] = $small;
                    $numbers[$i + 1] = $large;
                    $swapped = true;
                }
            }
            // if count >= O(n^2)
            if($this->count >= pow( count($numbers), 2 )) {
                $swapped = false;
            }
            $this->count++;
        }
        while($swapped);
        return $numbers;
    }
}
