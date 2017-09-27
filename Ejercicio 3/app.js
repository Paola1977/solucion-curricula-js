var age = parseInt(prompt ("¿Cual es tu edad?"))

if (age <= 2 && age >= 1)
    alert("Tu eres Toddler");
else if (age >=3 && age <= 4)
  alert("Tu eres Preschool");
else if (age >=5 && age <= 11)
  alert("Tu eres Gradeschooler");
else if (age >=12 && age <= 17)
  alert("Tu eres TeenAnger");
else if (age >=18 && age <= 21)
  alert("Tu eres Young Adult");
else if (age > 21 )
  alert("Tu eres Adult");