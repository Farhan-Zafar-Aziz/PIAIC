# entional Error: If you haven’t received an index error in one of your programs yet, try to make one happen. Change an index in one of your programs 
# to produce an index error. Make sure you correct the error before closing the 
# program.

intentional_error: list[str] = ["Honda","Lexus","Benz","Bently"]

# positive intentional error
print(intentional_error[4]) # IndexError: list index out of range

# negative intentional error
print(intentional_error[-5]) # IndexError: list index out of range