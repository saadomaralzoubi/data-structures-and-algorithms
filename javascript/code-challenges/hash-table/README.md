# Hashtables
Hash Tables are Data structures that store key-value pairs. each key is unique and each value can be associated with multiple keys. if there are more than one pair has the same (key) they will be chained within a linked list.

 


## Challenge
Implement a Hashtable Class with the following methods:

set Arguments: key, value Returns: nothing This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get Arguments: key Returns: Value associated with that key in the table
contains Arguments: key Returns: Boolean, indicating if the key exists in the table already.
hash Arguments: key Returns: Index in the collection for that key

## Approach & Efficiency
set: space O(1)/time O(1)
hash: space O(1)/time O(1)
contains: space O(1)/time O(1)
get: space O(1)/time O(1) 

## API
set(key, value):This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

get(key): takes in the key and returns the value from the table.

contains(key): takes in the key and returns a boolean, indicating if the key exists in the table already.

keys Returns: Collection of keys

hash(key):takes in an arbitrary key and returns an index in the collection.

