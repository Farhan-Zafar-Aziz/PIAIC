# Slices: Using one of the programs you wrote in this chapter, add several 
# lines to the end of the program that do the following:
# • Print the message The first three items in the list are:. Then use a slice to 
# print the first three items from that program’s list.
# • Print the message Three items from the middle of the list are:. Then use a 
# slice to print three items from the middle of the list.
# • Print the message The last three items in the list are:. Then use a slice to 
# print the last three items in the list.

players = ["Fakhar","Imam","Babar","Rizwan","Shadab","Rauf","Shaheen"]

print("The first three player in the list are:")
for player in players[:3]:
    print(player)
    
print("Three player from the middle of the list are:")
for player in players[2:5]:
    print(player)    

print("Last three player in the list are:")
for player in players[4:]:
    print(player)    