#  Greetings: Start with the list you used in Exercise 3-1, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name

names: list[str] = ["Sadiq","Jabir","Hamzah"]

for i in names[0:]:
    print(f"Hello {i}, would you like learn something new!?")