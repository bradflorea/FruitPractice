const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma','Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// 3
function search(str) {
	 return fruit.filter(fruit => fruit.toLowerCase().includes(str.toLowerCase()));
}

//
function searchHandler(e) {
	let inputVal = e.target.value;
	showSuggestions(search(inputVal), inputVal);
}

//7
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	if (inputVal === '') {
		return;
	}
	for (let result of results) {
		let listItem = document.createElement('li');
		listItem.innerHTML = result;
		suggestions.appendChild(listItem);
	}

}

// 6
function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
};
   

// 1d
input.addEventListener('input', searchHandler);


// 5
suggestions.addEventListener('click', useSuggestion);