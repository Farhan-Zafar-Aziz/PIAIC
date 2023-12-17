#  Stripping Names: Use a variable to represent a person’s name, and 
# include some whitespace characters at the beginning and end of the name. 
# Make sure you use each character combination, "\t" and "\n", at least once.
# Print the name once, so the whitespace around the name is displayed. 
# Then print the name using each of the three stripping functions, lstrip(), 
# rstrip(), and strip()

newline: str = "Free\n Palestine"
print(newline) 
#Free 
 # Palestine

tab: str = "Free\t Palestine"
print(tab)
# Free     Palestine

using_method: str = "     Free Palestine      "
print(using_method) 
#     Free Palestine    before using lstrip method

remove_left_space: str = "     Free Palestine      "
print(remove_left_space.lstrip())
# Free Palestine

remove_right_space: str = "     Free Palestine      "
print(remove_right_space.rstrip())
#   Free Palestine

whitespace: str = "     Free Palestine      "
print(whitespace.strip())
# Free Palestine