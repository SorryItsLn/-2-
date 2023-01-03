async function getData(url = '/data.json') {
    const response = await fetch(url);
    const data = await response.json();

    return data;

}

class Hero {

    constructor(data, container = '.storm', viewHero) {
        this.data = data;
        this.container = document.querySelector(container);
        this.viewHero = viewHero;
        this.createHero();
    }
    createHero() {
        const { title, strange, photo } = this.data;
        const id = title.toLowerCase().replace(/ /g, "-");
        const ico = photo;
        const { atack, agility, defence } = strange;

        this.container.insertAdjacentHTML("beforeend", `<div class="storm">
        <div class="pictures">
            <img src="${ico}" width="400px" alt="">
        </div>
        <div class="srength">
            <div>Сила героя</div>
            <div class="parametrs">
                <div class="value"> Атака
                    <div class=""> ${atack}</div>
                </div>
                <div class="value">Ловкость
                    <div class="">${agility}</div>
                </div>
                <div class="value">Броня
                    <div class="">${defence}</div>
                </div>
            </div>
        </div>
    </div> `
        )
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getData()
        .then(data => {
            i = 0;
            const button = document.querySelector('.switch_but')
            button.addEventListener('click', function () {
                if (i < 2) {
                    i++
                } else {
                    i = 0;
                }
                const name = data[i];
                new Hero(name);
                console.log(i)
            });
            button.addEventListener('click', function () {
                
                
                

            })


        }
        )
}
)






attackers = [10, 3, 7, 7];
defenders = [2, 4, 6, 8];

function att(strangeatt, survivorsdef, survivorsatt, count, strangedef) {
    survivorsdef = 0;
    survivorsatt = 0;
    strangeatt = 0;
    strangedef = 0;
    if (attackers.length > defenders.length) {
        console.log(count);
        for (let index = 0; index < count; index++) {
            defenders.push(0);
            console.log(defenders);
        }
    }
    count = attackers.length - defenders.length;

    for (let i = 0; i < attackers.length; i++) {
        strangeatt = strangeatt + attackers[i];
        strangedef = strangedef + defenders[i];
        if (attackers[i] < defenders[i]) {
            survivorsdef++;
        }
        if (attackers[i] > defenders[i]) {
            survivorsatt++;

        }
    }
    console.log('Сила обороны', strangedef)
    console.log('Сила атаки', strangeatt)
    console.log('Выжили про обороне', survivorsdef)
    console.log('Выжили про атаке', survivorsatt)

    if (survivorsdef > survivorsatt) {
        console.log("Оборона победила")
    } else if (survivorsdef = survivorsatt) {
        if (strangedef > strangeatt) {
            console.log("Оборона победила");

        } else {
            // alert("Атакующая сторона победила")
            console.log(" Атака победила");
        }

    }

    else {
        alert("Атакующая сторона победила")
        console.log("Атакующая сторона победила");
    }


};
att()