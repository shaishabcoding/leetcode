export class ListNode {
	constructor(public val = 0, public next: ListNode | null = null) {}

	static fromArray(arr: number[]): ListNode | null {
		if (arr.length === 0) return null;

		const root = new ListNode(arr[0]);
		const queue: ListNode[] = [root];
		let i = 1;
		while (i < arr.length) {
			const node = queue.shift()!;
			node.next = arr[i] === null ? null : new ListNode(arr[i++]);
			if (node.next) queue.push(node.next);
		}

		return root;
	}
}
