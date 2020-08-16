# Create a function that reverses a string:

# Linear solution
def reverse(str):
    # check input
    if not str or len(str) < 2 or type(str) != 'str':
        return 'bad input!'

    backwards = []
    totalItems = str.length - 1

    for i in reversed(totalItems):
        backwards.insert(str[i])

    return ''.join(backwards)


# # Readable solution
def reverse2(str):
  checkInput(str)

  return ''.join(reversed(str))


def checkInput(str):
  if not str or len(str) < 2 or type(str) != 'str':
    raise Exception('bad input!')

  return str


print(reverse('hello'))
