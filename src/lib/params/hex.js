import items from '$lib/data.json';

const slugIitems= items.map((item)=> item.numericCode);
console.log(slugIitems)

export function match(value) {
	return slugIitems.includes(value);
}
