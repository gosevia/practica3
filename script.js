class Personaje{
    constructor(name, tipo, forma, posicion, detalles){
        this.name = name;
        this.tipo = tipo;
        this.forma = forma;
        this.posicion = posicion;
        this.det = detalles;
        this.detalles = function(){
            if(this.tipo == 'bird'){            
                document.getElementById(this.det).innerHTML = `<button type='button' onclick='${this.name}.volar()' id='${this.name}' value='${this.masa}' class='btn btn-danger'>ATTACK</button><h3>Nombre: ${this.name}</h3><h3>Masa: ${this.masa}</h3><h3>Habilidad: ${this.habilidad}</h3>`;
                document.getElementById(this.posicion).innerHTML = `<img id="${this.forma}" class="object-image" src='${this.forma}'/>`;
            }else{
                document.getElementById(this.det).innerHTML = `<input type="radio" class="form-check-input" id="${this.name}" name="optradio" value="${this.puntos}" checked><h3>Nombre: ${this.name}</h3><h3>Fortaleza: ${this.fortaleza}</h3><h3>Vida: ${this.puntos}</h3>`;
                document.getElementById(this.posicion).innerHTML = `<img id="${this.forma}" class="object-image" src='${this.forma}'/>`;
            }
        }
    }
}
class Ave extends Personaje{
    constructor(name, tipo, forma, posicion, detalles, habilidad, masa){
        super(name, tipo, forma, posicion, detalles);
        this.habilidad = habilidad;
        this.masa = masa;
        this.volar = function(){
            document.getElementById('status').innerHTML = `<h3>${this.name} ha lanzado un ataque!</h3>`;
            if(document.getElementById('Soldier').checked){
                Soldier.puntos -= this.masa;
                var img = document.getElementById(Soldier.forma);
                img.style.opacity = Soldier.puntos / 100;
                if(Soldier.puntos <= 0){
                    Soldier.puntos = 0;
                    Soldier.morir();
                }
                document.getElementById(Soldier.det).innerHTML = `<input type="radio" class="form-check-input" id="Soldier" name="optradio" value="${Soldier.puntos}" checked><h3>Nombre: ${Soldier.name}</h3><h3>Fortaleza: ${Soldier.fortaleza}</h3><h3>Vida: ${Soldier.puntos}</h3>`;
            }
            if(document.getElementById('King').checked){
                King.puntos -= this.masa;
                var img = document.getElementById(King.forma);
                img.style.opacity = King.puntos / 100;
                if(King.puntos <= 0){
                    King.puntos = 0;
                    King.morir();
                }
                document.getElementById(King.det).innerHTML = `<input type="radio" class="form-check-input" id="King" name="optradio" value="${King.puntos}" checked><h3>Nombre: ${King.name}</h3><h3>Fortaleza: ${King.fortaleza}</h3><h3>Vida: ${King.puntos}</h3>`;
            }
            if(document.getElementById('Willy').checked){
                Willy.puntos -= this.masa;
                var img = document.getElementById(Willy.forma);
                img.style.opacity = Willy.puntos / 100;
                if(Willy.puntos <= 0){
                    Willy.puntos = 0;
                    Willy.morir();
                }
                document.getElementById(Willy.det).innerHTML = `<input type="radio" class="form-check-input" id="Willy" name="optradio" value="${Willy.puntos}" checked><h3>Nombre: ${Willy.name}</h3><h3>Fortaleza: ${Willy.fortaleza}</h3><h3>Vida: ${Willy.puntos}</h3>`;
            }
            if(Soldier.puntos <= 0 && King.puntos <= 0 && Willy.puntos <= 0){
                document.getElementById('status').innerHTML = `<h2>GAME OVER</h2><button type="button" onclick="window.location.reload();" id="reset" value="reset" class="btn btn-primary">PLAY AGAIN</button>`;
            }
        }
    }
}
class Pig extends Personaje{
    constructor(name, tipo, forma, posicion, detalles, fortaleza, puntos){
        super(name, tipo, forma, posicion, detalles);
        this.fortaleza = fortaleza;
        this.puntos = puntos;
        this.morir = function(){
            document.getElementById('status').innerHTML = `<h3 style="color: red">${this.name} ha muerto.</h3>`;
        }
    }
}

const Blue = new Ave('Blue', 'bird', 'bird1.png', 'bird1', 'detalle1', 'smash', 5);
const Yellow = new Ave('Yellow', 'bird', 'bird2.png', 'bird2', 'detalle2', 'dive', 15);
const Red = new Ave('Red', 'bird', 'bird3.png', 'bird3', 'detalle3', 'explode', 10);
const Soldier = new Pig('Soldier', 'pig', 'pig1.png', 'pig1', 'detalle4', 10, 100);
const King = new Pig('King', 'pig', 'pig2.png', 'pig2', 'detalle5', 5, 100);
const Willy = new Pig('Willy', 'pig', 'pig3.png', 'pig3', 'detalle6', 15, 100);

Blue.detalles();
Yellow.detalles();
Red.detalles();
Soldier.detalles();
King.detalles();
Willy.detalles();