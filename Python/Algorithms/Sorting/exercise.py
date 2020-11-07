bubbleSort = 'bubble sort'
selectionSort = 'Selection sort'
insertionSort = 'Insertion sort'
radixSort = 'Radix sort'
countingSort = 'Counting sort'
quickSort = 'Quick sort'
mergeSort = 'Merge sort'

#1 - Sort 10 schools around your house by distance:
insertionSort

#2 - eBay sorts listings by the current Bid amount:
radixSort || countingSort # bc fixed length of integers

#3 - Sport scores on ESPN
quickSort

#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
mergeSort # always get time complexity of (o log N)

#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
insertionSort  #  bc data is almost sorted

#6 - Temperature Records for the past 50 years in Canada
radixSort || countingSort  #  only for integers
quickSort  #  to get decimal places

#7 - Large user name database needs to be sorted. Data is very random.
mergeSort   # if enough memory
quickSort  #  with good pivot, and data is not too big

#8 - You want to teach sorting for the first time
bubbleSort || selectionSort
