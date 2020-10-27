# 1. Identify the base case
# 2. Identify the recursive case
# 3. Return when needed

counter = 0
def inception():
    global counter
    print('counter: ')
    print(counter)
    if counter > 3:
        print('Done')
        return
    counter += 1
    return inception()


inception()
