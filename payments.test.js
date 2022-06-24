describe('Payments test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		// paymentForm.submit();
		billAmtInput.value = '100';
		tipAmtInput.value = '10';
	});

	it('should show tip ammount equal to 10%.', function() {
		// expect(calculateTipPercent(100, 20)).toEqual(20);
		submitPaymentInfo();
		let tipPerc = '';
		for (const key in allPayments) {
			if (Object.hasOwnProperty.call(allPayments, key)) {
				const element = allPayments[key];
				for (const keys in element) {
					if (Object.hasOwnProperty.call(element, keys)) {
						const element1 = element[keys];
						if (keys === 'tipPercent') {
							tipPerc = element1;
						}
					}
				}
			}
		}
		expect(tipPerc).toEqual(10);
	});

	// it('should create a new row for appendTd(tr, value) ', function() {
	// 	// expect(mySpy).toHaveBeenCalled();
	// });

	afterEach(function() {
		// teardown logic
		// serverTbody.deleteRow(0);
	});
});
