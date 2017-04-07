<?php
class BinaryTree {
    public $root;

    public function insert($value) {
        $node = $this->root;
        if(!$node) {
            return $this->root = new BinaryNode($value);
        }

        while($node) {
            if($value > $node->value) {
                if($node->right) {
                    $node = $node->right;
                } else {
                    $node = $node->right = new BinaryNode($value);
                    break;
                }
            } elseif($value < $node->value) {
                if($node->left) {
                    $node = $node->left;
                } else {
                    $node = $node->left = new BinaryNode($value);
                    break;
                }
            } else {
                break;
            }
        }
        return $node;
    }
}
