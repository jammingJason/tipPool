describe('Payments test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		// paymentForm.submit();
		billAmtInput.value = '100';
		tipAmtInput.value = '10';
	});

	it('should show tip ammount equal to 10%.', function() {
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

	it('should create a new row for appendPaymentTable(curPayment)', function() {
		let curPayment = { billAmt: 200, tipAmt: 20, tipPercent: 10 };

		// alert(curPayment);
		appendPaymentTable(curPayment);
		paymentTableBody = document.querySelectorAll('#summaryTable');

		expect(paymentTableBody.length).toEqual(1);
	});

	it('should do something for appendDeleteBtn(tr)', function() {
		let tr = document.createElement('tr');
		appendDeleteBtn(tr);

		expect(tr.children.length).toEqual(1);
	});

	it('should do something for updateSummary()', function() {
		updateSummary();

		// alert();
	});

	afterEach(function() {
		// teardown logic
		// serverTbody.deleteRow(0);

		billAmtInput.value = '';
		tipAmtInput.value = '';
	});
});
