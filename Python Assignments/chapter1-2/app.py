# Underscores in Numbers
# When you print a number that was defined using underscores, Python prints only the digits:

univers_age: int = 14_45_23_0000000000000
print(univers_age)
# 1445230000000000000

# Python ignores the underscores when storing these kinds of values. 
# Even if you don’t group the digits in threes, the value will still be unaffected. To Python, 1000 is the same as 1_000, which is the same as 10_00. This 
# feature works for both integers and floats.

#Multiple Assignments
#in which you can assign multi variables in a single line for easy code and more readable

x, y, z = 1, 'Hey', True
print(x, y, z)
# 1 Hey True

#Python Constant

CONSTANT_IN_PYTHON: str = "We can assign constant variable using Capital Alphabate in Python."
print(CONSTANT_IN_PYTHON)
# We can assign constant variable using Capital Alphabate in Python.