var1 = "B2"
var2 = "C2"


for number in range(2,29):
	for pair in [['A','B'],['C','D'],['E','F'],['G','H'],['I','J'],['K','L'],['M','N']]:
		var1 = pair[0]+str(number)
		var2 = pair[1]+str(number)

		print var1 + '&":\'"&' + var2 + '&"\'," &',
