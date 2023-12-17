#  One Million: Make a list of the numbers from one to one million, and then 
# use a for loop to print the numbers. (If the output is taking too long, stop it by 
# pressing CTRL-C or by closing the output window.)

nmbrs: list[int] = list(range(1,1000000))

for value in nmbrs:
    print(value)