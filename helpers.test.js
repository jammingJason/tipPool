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
	});

	afterEach(function() {
		// teardown logic
		// serverTbody.deleteRow(0);
	});
});
