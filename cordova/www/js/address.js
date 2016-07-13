myApp.onPageInit('address', function(page) {

	$$(".toolbar").addClass('hide');
	var carVendors = {
		Japanese: ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
		German: ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
		American: ['Cadillac', 'Chrysler', 'Dodge', 'Ford']
	};
	var pickerDependent = myApp.picker({
		input: '#picker-dependent',
		rotateEffect: true,
		formatValue: function(picker, values) {
			return values[1];
		},
		cols: [{
			textAlign: 'left',
			values: ['Japanese', 'German', 'American'],
			onChange: function(picker, country) {
				if(picker.cols[1].replaceValues) {
					picker.cols[1].replaceValues(carVendors[country]);
				}
			}
		}, {
			values: carVendors.Japanese,
			width: 160,
		}, ]
	});

});

myApp.onPageAfterBack('address', function(page) {

	$$(".toolbar").removeClass('hide');
});