<?php

class Fiesta {
	public function factorial($number, $accumulator) {
		if($number === 0) {
			return $accumulator;
		}
		return $this->factorial($number - 1, $number * $accumulator);
	}
}
