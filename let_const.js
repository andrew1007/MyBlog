<p>
  const and let have the same block scoping rules. The difference between the two is the fact that
  const assignments can not be change nor redeclared, but are mutable. Let can be changed
  and redeclared.
</p>

let letDeclared = 'letDeclaredeclare with let'
letDeclared = 10 //successfully reassigned

const constDeclared = 'declare with const'
constDeclared = 10 //TypeError: Assignment to constant variable.


<h2>
  const can never be reassigned, but can be mutated
</h2>

const anArray = []
anArray.push(2)
console.log(anArray)

<h2>
  Why const is always preferred
</h2>

<p>
  const is better because programmers are humans. A value assigned using const will never change,
  which is one less thing that programmers have to keep track of. The benefits of this concept
  become more apparent for large scale projects.
</p>
