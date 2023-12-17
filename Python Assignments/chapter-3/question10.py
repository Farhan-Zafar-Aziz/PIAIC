#  Every Function: Think of things you could store in a list. For example, you 
# could make a list of mountains, rivers, countries, cities, languages, or anything 
# else you’d like. Write a program that creates a list containing these items and 
# then uses each function introduced in this chapter at least once.

rivers: list[str] = ["Sindhu","Ravi","Hunza","Satluj","Jahlam","Manchar"]
rivers.append('Keenjhar')
print(rivers)

rivers.insert(0,'Saif ul Malook')
print(rivers)

rivers.pop()
print(rivers)

rivers.remove('Ravi')
print(rivers)

rivers.sort()
print(rivers)

sorted(rivers)
print(rivers)

rivers.reverse()
print(rivers)

len(rivers) # this function can't work in terminal but it's show result in jupyter note book correctly

del rivers # list empty so don't show any return 
print('empty list')