# Seeing the World: Think of at least five places in the world you’d like 
# to visit.
# • Store the locations in a list. Make sure the list is not in alphabetical order.

fav_places: list[str] = ["sea view","forest","desert","mountains","lakes"]

print(fav_places) # original list
# ['sea view', 'forest', 'desert', 'mountains', 'lakes']

print(sorted(fav_places)) # sorted actual list without modifying
# ['desert', 'forest', 'lakes', 'mountains', 'sea view']

print(fav_places) #  still original list
# ['sea view', 'forest', 'desert', 'mountains', 'lakes']

fav_places.sort(reverse=True)  # reverse alphabetical order
print(fav_places) # ['sea view', 'mountains', 'lakes', 'forest', 'desert']

fav_places.reverse() # print again to show it's back original order
print(fav_places) # ['desert', 'forest', 'lakes', 'mountains', 'sea view']

fav_places.sort() # print again to show it's alphabetically ordered
print(fav_places) # ['desert', 'forest', 'lakes', 'mountains', 'sea view']

fav_places.sort(reverse=True) # print again to show it's reverse-alphabetically order
print(fav_places) # ['sea view', 'mountains', 'lakes', 'forest', 'desert']