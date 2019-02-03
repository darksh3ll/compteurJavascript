const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const secondes = document.querySelector('.secondes')
const btn = document.querySelector('button')

const input = document.querySelector('#date')

const inputArrinput = input.value.split('-')

const inputYears = inputArrinput[0]
const inputMonth = inputArrinput[1]
const inputDays = inputArrinput[2]


const launch = new Date(`${inputYears},${inputMonth},${inputDays}`) //Annee,Mois,Jours,Heures,Minutes,Secondes => Millisecondes





function setDate() {

    // calculation number of days
    const now = new Date(); //date du jours
    let s = (launch.getTime() - now.getTime())/1000
    const d = Math.floor(s/86400) ;
    days.textContent = d
    s -= d*86400

    // calculation number of hours
    const h = Math.floor(s/3600) ;
    hours.textContent = h
    s -= h*3600

      // calculation number of minutes
      const m = Math.floor(s/60) ;
      minutes.textContent = m
      s -= m*60
    //secondes
    s = Math.floor(s)
    secondes.textContent = s

    setTimeout(setDate,1000)
}

btn.addEventListener('click',function () {
        setDate()
})
