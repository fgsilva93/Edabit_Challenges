function relationToLuke(name) {
	switch(name){
		case 'Darth Vader':
		 return 'Luke, I am your father.';
		 break;
		case 'Leia':
			return 'Luke, I am your sister.';
			break;
		case 'R2D2':
			return 'Luke, I am your droid.';
			break;
		case 'Han':
			return 'Luke, I am your brother in law.';
			break;
	}
}

Test.assertEquals(relationToLuke("Darth Vader"), "Luke, I am your father.")
Test.assertEquals(relationToLuke("Leia"), "Luke, I am your sister.")
Test.assertEquals(relationToLuke("Han"), "Luke, I am your brother in law.")
Test.assertEquals(relationToLuke("R2D2"), "Luke, I am your droid.")