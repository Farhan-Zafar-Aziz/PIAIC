# l. Burger: Think of at least three kinds of your favorite Burgers. Store these 
# burger names in a list, and then use a for loop to print the name of each burger.
# • Modify your for loop to print a sentence using the name of the burger, 
# instead of printing just the name of the burger. For each burger, you should 
# have one line of output containing a simple statement like I like zinger burger.
# • Add a line at the end of your program, outside the for loop, that states 
# how much you like burger. The output should consist of three or more lines 
# about the kinds of burger you like and then an additional sentence, such as 
# I really love burger

burgers: list[str] = ["Zinger Burger","Kabab Burger","Cheez Burger","Eggfry Burger"]

print(burgers)

for i in burgers:
    print(f"I like {i}.")

print(f"Mostly I like {burgers[0]} with additional dish fries, ketchup and coconut pickle.\n It's too yumm and crunchii.\n I suggest you should try.")    