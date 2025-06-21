export class _Node {
	constructor(public val: number, public neighbors: _Node[] = []) {}
	static fromArray(arr: number[][]): _Node | null {
		if (arr.length === 0) return null;

		const root = new _Node(
			arr[0][0],
			arr[0].slice(1).map((n) => new _Node(n))
		);
		const queue: _Node[] = [root];
		let i = 1;
		while (i < arr.length) {
			const node = queue.shift()!;
			node.neighbors = arr[i].slice(1).map((n) => new _Node(n));
			node.neighbors.forEach((n) => queue.push(n));
			i++;
		}

		return root;
	}
}
