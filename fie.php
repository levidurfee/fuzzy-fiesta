<?php

include('php/BinaryNode.php');
include('php/BinaryTree.php');
include('php/Fiesta.php');

$bst = new BinaryTree;

$numbers = [
	95,
	62,
	50,
	20,
	87,
	25,
	89,
];

$c[0] = md5(serialize($numbers));

$fiesta = new Fiesta;
$numbers = $fiesta->bubbleSort($numbers);

$c[1] = md5(serialize($numbers));

var_dump($numbers);
