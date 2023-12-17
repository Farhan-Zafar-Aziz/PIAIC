# File Extensions: Python has a removesuffix() method that works exactly 
# like removeprefix(). Assign the value 'python_notes.txt' to a variable called 
# filename. Then use the removesuffix() method to display the filename without 
# the file extension, like some file browsers do.

remove_prefix: str = "https:/farhan_aziz460"
print(remove_prefix.removeprefix('https:/'))
# farhan_aziz460

remove_suffix: str = "farhan_aziz/460"
print(remove_suffix.removesuffix('/460'))
# farhan_aziz