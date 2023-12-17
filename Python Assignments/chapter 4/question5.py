# . Summing a Million: Make a list of the numbers from one to one million, and 
# then use min() and max() to make sure your list actually starts at one and ends 
# at one million. Also, use the sum() function to see how quickly Python can add 
# a million numbers

nmbrs: list[int] = list(range(1,1000001))

print(min(nmbrs)) # 1

print(max(nmbrs)) # 1000000

print(sum(nmbrs)) # 500000500000