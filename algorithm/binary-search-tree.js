/**
 * 二叉树
 */
const IIree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 4,
            left: null,
            right: null
        }
    },
    right: {
        value: 7,
        left: {
            value: 6,
            left: null,
            right: null
        },
        right: {
            value: 8,
            left: null,
            right: null
        }
    }
}


/**
 * 
 * 前序遍历
 * root -> left -> right
 * @param {*} node 二叉树
 * @returns 
 * 
 * 5 3 2 4 7 6 8
 */
let arr_pre = []
function preOrderTraverse(node) {
    if(node == null) return
    // console.log(node.value)
    arr_pre.push(node.value)
    preOrderTraverse(node.left)
    preOrderTraverse(node.right)
}


/**
 * 中序遍历
 * left -> root -> right
 * 
 * @param {*} node 二叉树
 * @returns 
 * 
 * 2 3 4 5 6 7 8
 */
 let arr_in = []
function inOrderTrvaerse(node) {
    if(node == null) return
    inOrderTrvaerse(node.left)
    // console.log(node.value)
    arr_in.push(node.value)
    inOrderTrvaerse(node.right)
}


/**
 * 
 * 后序遍历
 * left -> right -> root
 * 
 * @param {*} node 二叉树
 * @returns 
 * 
 * 2 4 3 6 8 7 5
 */
let arr_post = []
function postOrderTrvaerse(node) {
    if (node == null) return
    postOrderTrvaerse(node.left)
    postOrderTrvaerse(node.right)
    // console.log(node.value)
    arr_post.push(node.value)
}


/**
 * 
 * 获取第K小的值
 * 
 * @param {*} tree 二叉树
 * @param {*} k 第K小的值
 * @returns 
 */
module.exports = function getKthValue(tree, k){
    inOrderTrvaerse(tree)
    return arr_in[k - 1] || null
}
