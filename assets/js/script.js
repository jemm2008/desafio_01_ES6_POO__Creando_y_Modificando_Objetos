//Start
alert(`Hola!, Buen día!! por favor
abrir 'Inspecionar', luego abrir la "Consola",
los ejercicios se muestran en la misma.`)
//
  //  *******  CONSULTORIO  *******  //
function Consultorio (nombre, pacientes){
    let _nombre = nombre
    let _pacientes = pacientes || []

    Object.defineProperty(this, "_getNombre", {
        get:function(){
            return _nombre
        }
    })

    Object.defineProperty(this, "_setNombre", {
        set:function(newName){
            return _nombre = newName
        }
    })

    Object.defineProperty(this, "_getPacientes", {
        get:function(){
            return _pacientes
        }
    })

    Object.defineProperty(this, "_addPaciente", {
        set:function(newPatient){
            return _pacientes.push(newPatient)
        }
    })
}
//  Consultorio. Métodos Públicos  //
Consultorio.prototype.getNombre = function(){
    return this._getNombre
}
Consultorio.prototype.setNombre = function(new_name){
    return this._setNombre = new_name
}

Consultorio.prototype.getPacientes = function(){
    return this._getPacientes
}
Consultorio.prototype.addPaciente = function(paciente){
    return this._addPaciente = paciente
}
//  Consultorio. Método Público para "FILTRAR POR EL NOMBRE" y mostrar los datos de un Paciente (Req. 4-a)  //
Consultorio.prototype.filtrarNombrePaciente = function(nombreA_Filtrar){
    this.getPacientes().filter(function(paciente) {
        if (paciente.getNombre() == nombreA_Filtrar){
            return console.log(`
Datos del paciente:
                    Nombre:       ${paciente.getNombre()}, 
                    Edad:         ${paciente.getEdad()},
                    RUT:          ${paciente.getRut()},
                    Diagnóstico:  ${paciente.getDiagnOstico()}.
                    `)
        }
    })
}
//  Consultorio. Método Público para mostrar TODOS los Datos de los Pacientes (Req. 4-b)  //
Consultorio.prototype.mostrarFullData = function(){
    return this.getPacientes().forEach(function(paciente, id) {
        console.log(`paciente ${id+1} Nombre: ${paciente.getNombre()} - Rut: ${paciente.getRut()} - Edad: ${paciente.getEdad()} - Diagnóstico: ${paciente.getDiagnOstico()}`)
    })
}
  //  *******  FIN  CONSULTORIO  *******  //
//
//
  //  *******  PACIENTE  *******  //
function Paciente (nombre, edad, rut, diagnOstico){
    let _nombre = nombre
    let _edad = edad
    let _rut = rut
    let _diagnOstico = diagnOstico || ""

    Object.defineProperty(this, "_getNombre", {
        get:function(){
            return _nombre
        }
    })    
    Object.defineProperty(this, "_setNombre", {
        set:function(newName){
            return _nombre = newName
        }
    })

    Object.defineProperty(this, "_getEdad", {
        get:function(){
            return _edad
        }
    })   
    Object.defineProperty(this, "_setEdad", {
        set:function(newAge){
            return _edad = newAge
        }
    })    

    Object.defineProperty(this, "_getRut", {
        get:function(){
            return _rut
        }
    })   
    Object.defineProperty(this, "_setRut", {
        set:function(newRut){
            return _rut = newRut
        }
    })   

    Object.defineProperty(this, "_getDiagnOstico", {
        get:function(){
            return _diagnOstico
        }
    })
    Object.defineProperty(this, "_setDiagnOstico", {
        set:function(newDiagnostic){
            return _diagnOstico = newDiagnostic
        }
    })
}
//  Paciente. Métodos Públicos  //
Paciente.prototype.getNombre = function(){
    return this._getNombre
}
Paciente.prototype.setNombre = function(new_name){
    return this._setNombre = new_name
}

Paciente.prototype.getEdad = function(){
    return this._getEdad
}
Paciente.prototype.setEdad = function(new_Age){
    return this._setEdad = new_Age
}

Paciente.prototype.getRut = function(){
    return this._getRut
}
Paciente.prototype.setRut = function(new_rut){
    return this._setRut = new_rut
}

Paciente.prototype.getDiagnOstico = function(){
    return this._getDiagnOstico
}
Paciente.prototype.setDiagnOstico = function(new_diagnostic){
    return this._setDiagnOstico = new_diagnostic
}
  //  *******  FIN  PACIENTE  *******  //
//
//
  //  *******  INICIO  EJECUCION  DE  CODIGO  *******  //
// Crear Consultorio:
let clinica = new Consultorio("Jose Gregorio")
// Crear Pacientes:
let p1 = new Paciente("Juan", 47, "25123653-6")
let p2 = new Paciente("María", 43, "25123421-6")
let p3 = new Paciente("Juana", 16, "25123423-2")
let p4 = new Paciente("José", 14, "25123433-K")
let p5 = new Paciente("Peter", 30,"19123009-1")
let p6 = new Paciente("Sherlock", 57,"6123597-4")
let p7 = new Paciente("Watson", 51,"7123710-K")
// Añadir pacientes al Consultorio:
    console.log("Contenido inicial del Arreglo de Pacientes:")
    console.log(clinica.getPacientes())
//
clinica.addPaciente(p1)
clinica.addPaciente(p2)
clinica.addPaciente(p3)
clinica.addPaciente(p4)
clinica.addPaciente(p5)
clinica.addPaciente(p6)
clinica.addPaciente(p7)
    console.log("Contenido final del Arreglo Pacientes:")
// Método para "mostrar todos los datos" de todos los pacientes // 
    clinica.mostrarFullData()
//
    console.log("*******************************************")
//
    console.log(`Uso de GETTERs y SETTERs:
    `)
clinica.getPacientes()[0].setNombre("Ricardo")
    console.log(`Paciente 1 Nuevo Nombre: ${clinica.getPacientes()[0].getNombre()}`)
clinica.getPacientes()[1].setEdad(39)
    console.log(`Paciente 2 Nueva Edad: ${clinica.getPacientes()[1].getEdad()}`)
clinica.getPacientes()[5].setRut("987123-7")
    console.log(`Paciente 6 Nuevo RUT: ${clinica.getPacientes()[5].getRut()}`)
clinica.getPacientes()[0].setDiagnOstico("Insomnio")
clinica.getPacientes()[1].setDiagnOstico("Miopia")
clinica.getPacientes()[2].setDiagnOstico("Diabetes")
clinica.getPacientes()[3].setDiagnOstico("Fotofobia")
clinica.getPacientes()[4].setDiagnOstico("Alergia")
clinica.getPacientes()[5].setDiagnOstico("Gripe")
clinica.getPacientes()[6].setDiagnOstico("Asma")
    console.log(`Paciente 7 Diagnóstico: ${clinica.getPacientes()[6].getDiagnOstico()}`)
    console.log(`Paciente 3 Diagnóstico: ${clinica.getPacientes()[2].getDiagnOstico()}`)
//
    console.log("*******************************************")
//
    console.log(`Contenido del Arreglo Pacientes, luego de Modificar con GETTERs y SETTERs:
    `)
// Método para "mostrar todos los datos" de todos los pacientes // 
clinica.mostrarFullData()
//
    console.log("*******************************************")
//
// Método para "filtrar el nombre de un paciente" y mostrar todos SUS datos //
    console.log(`Filtrar por Nombre: "Juana" ...`)
clinica.filtrarNombrePaciente("Juana")
//
    console.log("*******************************************")
//
console.log(`Filtrar por Nombre: "Peter" ...`)
clinica.filtrarNombrePaciente("Peter")
//
    console.log("*******************************************")
//
// end.