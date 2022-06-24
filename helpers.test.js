describe('Helpers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		// paymentForm.submit();
	});

	it('should calculate the tip % on calculateTipPercent()', function() {
		expect(calculateTipPercent(100, 20)).toEqual(20);
	});

	it('should create a new row for appendTd(tr, value) ', function() {
		// expect(mySpy).toHaveBeenCalled();
		const newTr = document.createElement('tr');
		// const value = 200;
		appendTd(newTr, 200);

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual('200');
	});

	it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function() {
		let newTr = document.createElement('tr');

		appendDeleteBtn(newTr);

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual('X');
	});

	afterEach(function() {
		// teardown logic
		// serverTbody.deleteRow(0);
	});
});
