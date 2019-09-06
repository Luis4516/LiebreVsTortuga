var btnJugar = document.querySelector("#btnJugar").addEventListener("click", ()=> {

    class Corredor {
        constructor(nombre, numero) {
            this._nombre = nombre;
            this._numero = numero;
        }
    }

    class Tortuga extends Corredor {
        constructor(nombre, numero, edad) {
            super(nombre, numero);
            this._sumaTor = 0;
            this._edad = edad;
        }

        get suma() {
            return this._sumaTor;
        }

        avanzar() {
        var t = Math.trunc(Math.random()*10 + 1);
		if (t < 6 ) {
			this._sumaTor += 3; //paso rapido
		}
		else if (t > 5 && t < 8) {
			this._sumaTor -= 6; //resbalon
		}
		else {
			this._sumaTor += 1; //paso lento
		}
	}
}

class Liebre extends Corredor {
    constructor(nombre, numero, color) {
        super(nombre, numero)
        this._color = color;
        this._suma = 0;
    }
    get suma() {
        return this._suma;
    }

    saltoLiebre(){
        var l = Math.trunc(Math.random()*100 + 1);;
	
		if ( l < 21) {
			this._suma += 0; //dormir
		}
		else if ( l > 20 && l < 41) {
			this._suma += 9; //salto grande
		}
		else if (l > 40 && l < 51) {
			this._suma -= 12; //resbalon grande
		}
		else if(l > 50 && l < 86) {
			this._suma += 1; //salto pequeño
		}
		else {
			this._suma -= 2; //resbalon pequeño
		}
    }
}

class Resultado {
    constructor() {
    }
    lugares() {
        var tortuga = new Tortuga();
        var liebre = new Liebre();

        while(tortuga._sumaTor < 90 && liebre._suma < 90) {
            tortuga.avanzar();
            liebre.saltoLiebre();
        }
        console.log('Pos Tortuga ' + tortuga._sumaTor);
        console.log('Pos Liebre ' + liebre._suma);

        if(tortuga._sumaTor > 90) {
            alert("Ganó la tortuga");
        }
        else if(liebre._suma > 90) {
            alert("Ganó la liebre");
        }
        else if(liebre._suma> 90 && tortuga._sumaTor > 90) {
            alert("Empate");
        }   
    }
}

var resultado = new Resultado();
resultado.lugares();
});

