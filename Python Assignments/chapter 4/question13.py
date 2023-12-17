#  Buffet: A buffet-style restaurant offers only five basic foods. Think of five 
# simple foods, and store them in a tuple.
# • Use a for loop to print each food the restaurant offers.
# • Try to modify one of the items, and make sure that Python rejects the 
# change.
# • The restaurant changes its menu, replacing two of the items with different 
# foods. Add a line that rewrites the tuple, and then use a for loop to print 
# each of the items on the revised menu

buffey = ("Chicken Biryan","Mutton Biryani","Beef Pulao","Matka Biryani","White Pulao")

print("Original Menue:")
for resturant_offers in buffey:
    print(resturant_offers)

# buffey(0) = "Qabli Pulao"
# print(buffey)

print("\nChange Menue:")
new_menue = ("Qabli Pulao","Beef Pulao","Afghani Pulao")

for menue in new_menue:
    print(menue)