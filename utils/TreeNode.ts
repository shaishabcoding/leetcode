export class TreeNode {
	constructor(
		public val = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}

	static fromArray(arr: (number | null)[]): TreeNode | null {
		if (arr.length === 0) return null;

		const root = new TreeNode(arr[0] ?? 0);
		const queue: TreeNode[] = [root];
		let i = 1;
		while (i < arr.length) {
			const node = queue.shift()!;
			const leftVal = arr[i++];
			node.left = leftVal === null ? null : new TreeNode(leftVal);
			const rightVal = arr[i++];
			node.right = rightVal === null ? null : new TreeNode(rightVal);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return root;
	}
}
