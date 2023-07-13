function wish(msg, ...names) {
   console.log(names.length)
   for(let n of names)
      console.log(msg, n)
}


wish('Hi', 'Larry', 'Sergy')
