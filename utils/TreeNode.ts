export class TreeNode {
	constructor(
		public val = 0,
		public left: TreeNode | null = null,
		public right: TreeNode | null = null
	) {}

	static fromArray(arr: number[]): TreeNode | null {
		if (arr.length === 0) return null;

		const root = new TreeNode(arr[0]);
		const queue: TreeNode[] = [root];
		let i = 1;
		while (i < arr.length) {
			const node = queue.shift()!;
			node.left = arr[i] === null ? null : new TreeNode(arr[i++]);
			node.right = arr[i] === null ? null : new TreeNode(arr[i++]);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		return root;
	}
}
