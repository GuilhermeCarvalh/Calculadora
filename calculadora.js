
let cats = [
    'siames','Belga','Lince'
]
for (var i = 0; i < cats.length; i++) {
  let info = 0
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
    console.log(info)
  } else {
    info += cats[i] + ', ';
    console.log(info)
  }

}
