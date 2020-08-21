# Partly ripped from https://raw.githubusercontent.com/theja-m/Data-Structures-and-Algorithms/master/Data%20Structures%20-%20Hashtables/Hash%20Table%20Implementation.py


class Hashtable:
    def __init__(self):
        """
        Create an array(self.mydict) with a bucket size - which is derived from the load factor.
        The Load factor is a measure that decides when to increase the hashmap capacity to maintain the get() and put() operation complexity of O(1).
        The default load factor of hashmap is 0.75f (75% of the map size).
        Load Factor = (n/k)
        where n is the number of max number of elements that can be stored dict
        k is the bucket size
        Optimal Load factor is around (2/3) such that the effect of hash collisions is minimum
        """
        self.bucket = 16
        self.data = [[] for i in range(self.bucket)]

    def __str__(self):
        return str(self.__dict__)

    def hash(self, key):
        return len(key) % self.bucket

    def put(self, key, value):
        """
        value may already be present
        """
        hash_value = self.hash(key)
        reference = self.data[hash_value]
        for i in range(len(reference)):
            if reference[i][0] == key:
                reference[i][1] = value
                return None
        reference.append([key, value])
        return None

    def get(self, key):
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        hash_value = self.hash(key)
        reference = self.data[hash_value]
        for i in range(len(reference)):
            if reference[i][0] == key:
                return reference[i][1]
        return -1

    def remove(self, key):
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        hash_value = self.hash(key)
        reference = self.data[hash_value]
        for i in range(len(reference)):
            if reference[i][0] == key:
                reference.pop(i)
                return None
        return None

    def keys(self):
        """
        Get key values of the hashtable
        """
        keysArray = []
        for i in range(len(self.data)):
            if self.data[i]:
                keysArray.insert(self.data[i][0][0])
        return keysArray


h = Hashtable()
h.put('grapes', 1000)
h.put('apples', 10)
h.put('ora', 300)
h.put('banan', 200)
print(h.get('grapes'))
h.remove('apples')
print(h.keys())
