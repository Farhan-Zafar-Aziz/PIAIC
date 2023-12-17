# 7. Threes: Make a list of the multiples of 3, from 3 to 30. Use a for loop to 
# print the numbers in your list.

multiply: list[int] = [ ]

for multiplies in range(1,11):
    multiply.append(multiplies*3)

print(multiply)    