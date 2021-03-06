/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:
  Input: [[1,2,3],[4,5,6],[7,8,9]]
  Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:
  Input: [[1,2,3],[4,5,6]]
  Output: [[1,4],[2,5],[3,6]]

Note:
  1 <= A.length <= 1000
  1 <= A[0].length <= 1000
*/
/*
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function(A) {
  const result = new Array(A[0].length);
  for (let i = 0; i < A[0].length; ++i) {
    result[i] = new Array(A.length);
  }
  for (let r = 0; r < A.length; ++r) {
    for (let c = 0; c < A[0].length; ++c) {
      result[c][r] = A[r][c];
    }
  }
  return result;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
