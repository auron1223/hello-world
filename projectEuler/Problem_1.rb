=begin
Project Euler Problem 1
Author: Auron1223
Multiples of 3 and 5
=end

sum, i = 0, 0
while i < 1000
  sum += i if i % 3 == 0 || i % 5 == 0
  i += 1
end

puts sum
