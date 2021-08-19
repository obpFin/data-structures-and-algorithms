# Given a number N return the index value of the Fibonacci sequence, where the sequence is:

# 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
# the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

# For example: fibonacciRecursive(6) should return 8

calculations = 0
dynamic_calculations = 0

def fibonacci(n):     # O (2^n)
    """Normal fibonacci calculation using recursion"""

    global calculations
    calculations = calculations + 1
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)



def fibonacci_dynamic():   # O (n)
  """Fibonacci calculation using dynamic programming"""

  cache = dict()
  def fib(n):
    global dynamic_calculations
    dynamic_calculations = dynamic_calculations + 1

    if n in cache:
      return cache[n]
    if n < 2:
      return n
    cache[n] = fib(n - 1) + fib(n - 2)
    return cache[n]
  return fib

print('Normal Fibonacci:')
print(fibonacci(10))
print('Calculations:')
print(calculations)

print('Dynamic Fibonacci:')
fasterFib = fibonacci_dynamic()
print(fasterFib(10))
print('Calculations:')
print(dynamic_calculations)
