#  Favorite Number: Use a variable to represent your favorite number. Then, using that variable, create a message that reveals your favorite number. Print that message

myfav_num: int = 20
message: str = "My favourite number is:"

concate = f"""
{message} {myfav_num}
"""
print(concate)  # My favourite number is: 20