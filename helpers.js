// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
	let total = 0;

	for (let key in allPayments) {
		let payment = allPayments[key];
		// alert(payment);
		total += Number(payment[type]);
	}

	return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
	return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
	let newTd = document.createElement('td');
	newTd.innerText = value;
	tr.append(newTd);
	// appendDeleteBtn(tr);
}

function appendDeleteBtn(tr) {
	let newTd = document.createElement('td');
	newTd.innerText = 'X';
	tr.append(newTd);
	newTd.style.cursor = 'pointer';
	newTd.addEventListener('click', function(event) {
		newTd.parentElement.remove();
		for (const key in allServers) {
			if (Object.hasOwnProperty.call(allServers, key)) {
				const element = allServers[key];
				if (key === tr.id) {
					// alert(key);
					delete allServers[key];
				}
			}
		}
	});
}
