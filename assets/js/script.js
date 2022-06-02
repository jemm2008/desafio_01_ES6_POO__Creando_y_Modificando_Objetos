//Start
alert(`Hola!, Buen día!! por favor
abrir 'Inspecionar', luego abrir la "Consola",
los ejercicios se muestran en la misma.`)
//
  //  *******  CONSULTORIO  *******  //
function Consultorio (nombreC, pacientesC){
    var _nombreConsultorio = nombreC
    var _pacientesConsultorio = pacientesC || []

    Object.defineProperty(this, "_getNombre", {
        get:function(){
            return _nombreConsultorio
        }
    })

    Object.defineProperty(this, "_setNombre", {
        set:function(newNameC){
            return _nombreConsultorio = newNameC
        }
    })

    Object.defineProperty(this, "_getPacientes", {
        get:function(){
            return _pacientesConsultorio
        }
    })

    Object.defineProperty(this, "_addPaciente", {
        set:function(newPatientC){
            return _pacientesConsultorio.push(newPatientC)
        }
    })
}
//  Consultorio. Métodos Públicos  //
Consultorio.prototype.getNombre = function(){
    return this._getNombre
}
Consultorio.prototype.setNombre = function(newname_C){
    return this._setNombre = newname_C
}

Consultorio.prototype.getPacientes = function(){
    return this._getPacientes
}
Consultorio.prototype.addPaciente = function(newPaciente_C){
    return this._addPaciente = newPaciente_C
}
//  Consultorio. Método Público para "FILTRAR POR EL NOMBRE" y mostrar los datos de un Paciente (Req. 4-a)  //
Consultorio.prototype.filtrarNombrePaciente = function(nombreA_Filtrar){
    this.getPacientes().filter(function(paciente_X) {
        if (paciente_X.getNombre() == nombreA_Filtrar){
            return console.log(`
Datos del paciente:
                    Nombre:       ${paciente_X.getNombre()}, 
                    Edad:         ${paciente_X.getEdad()},
                    RUT:          ${paciente_X.getRut()},
                    Diagnóstico:  ${paciente_X.getDiagnOstico()}.
                    `)
        }
    })
}
//  Consultorio. Método Público para mostrar TODOS los Datos de los Pacientes (Req. 4-b)  //
Consultorio.prototype.mostrarFullData = function(){
    return this.getPacientes().forEach(function(paciente_All, id) {
        console.log(`paciente_All ${id+1} Nombre: ${paciente_All.getNombre()} - Rut: ${paciente_All.getRut()} - Edad: ${paciente_All.getEdad()} - Diagnóstico: ${paciente_All.getDiagnOstico()}`)
    })
}
  //  *******  FIN  CONSULTORIO  *******  //
//
//
  //  *******  PACIENTE  *******  //
function Paciente (nombreP, edadP, rutP, diagnOsticoP){
    var _nombrePaciente = nombreP
    var _edadPaciente = edadP
    var _rutPaciente = rutP
    var _diagnOsticoPaciente = diagnOsticoP || ""

    Object.defineProperty(this, "_getNombre", {
        get:function(){
            return _nombrePaciente
        }
    })    
    Object.defineProperty(this, "_setNombre", {
        set:function(newName_P){
            return _nombrePaciente = newName_P
        }
    })

    Object.defineProperty(this, "_getEdad", {
        get:function(){
            return _edadPaciente
        }
    })   
    Object.defineProperty(this, "_setEdad", {
        set:function(newAge_P){
            return _edadPaciente = newAge_P
        }
    })    

    Object.defineProperty(this, "_getRut", {
        get:function(){
            return _rutPaciente
        }
    })   
    Object.defineProperty(this, "_setRut", {
        set:function(newRut_P){
            return _rutPaciente = newRut_P
        }
    })   

    Object.defineProperty(this, "_getDiagnOstico", {
        get:function(){
            return _diagnOsticoPaciente
        }
    })
    Object.defineProperty(this, "_setDiagnOstico", {
        set:function(newDiagnostic_P){
            return _diagnOsticoPaciente = newDiagnostic_P
        }
    })
}
//  Paciente. Métodos Públicos  //
Paciente.prototype.getNombre = function(){
    return this._getNombre
}
Paciente.prototype.setNombre = function(new_name_Pac){
    return this._setNombre = new_name_Pac
}

Paciente.prototype.getEdad = function(){
    return this._getEdad
}
Paciente.prototype.setEdad = function(new_Age_Pac){
    return this._setEdad = new_Age_Pac
}

Paciente.prototype.getRut = function(){
    return this._getRut
}
Paciente.prototype.setRut = function(new_rut_Pac){
    return this._setRut = new_rut_Pac
}

Paciente.prototype.getDiagnOstico = function(){
    return this._getDiagnOstico
}
Paciente.prototype.setDiagnOstico = function(new_diagnostic_Pac){
    return this._setDiagnOstico = new_diagnostic_Pac
}
  //  *******  FIN  PACIENTE  *******  //
//
//
  //  *******  INICIO  EJECUCION  DE  CODIGO  *******  //
//
// Crear Consultorio:
var clinica = new Consultorio("Jose Gregorio")
console.log("Contenido inicial del Arreglo de Pacientes:")
var empty0 = [...clinica.getPacientes()]
console.log(empty0)
   //console.log(`Array length = ${clinica.getPacientes().length}`)
   //console.log(clinica.getPacientes().length)
   //console.log(clinica.getPacientes())
//
// Crear Pacientes:
var paX_1 = new Paciente("Juan", 47, "25123653-6")
var paX_2 = new Paciente("María", 43, "25123421-6")
var paX_3 = new Paciente("Juana", 16, "25123423-2")
var paX_4 = new Paciente("José", 14, "25123433-K")
var paX_5 = new Paciente("Peter", 30,"19123009-1")
var paX_6 = new Paciente("Sherlock", 57,"6123597-4")
var paX_7 = new Paciente("Watson", 51,"7123710-K")
// Añadir pacientes al Consultorio:
//
clinica.addPaciente(paX_1)
clinica.addPaciente(paX_2)
clinica.addPaciente(paX_3)
clinica.addPaciente(paX_4)
clinica.addPaciente(paX_5)
clinica.addPaciente(paX_6)
clinica.addPaciente(paX_7)
// console.log(clinica.getPacientes().length, Array.isArray(clinica.getPacientes()))
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
    console.log(`Paciente 1 Diagnóstico: ${clinica.getPacientes()[0].getDiagnOstico()}`)
    console.log(`Paciente 2 Diagnóstico: ${clinica.getPacientes()[1].getDiagnOstico()}`)
    console.log(`Paciente 3 Diagnóstico: ${clinica.getPacientes()[2].getDiagnOstico()}`)
    console.log(`Paciente 4 Diagnóstico: ${clinica.getPacientes()[3].getDiagnOstico()}`)
    console.log(`Paciente 5 Diagnóstico: ${clinica.getPacientes()[4].getDiagnOstico()}`)
    console.log(`Paciente 6 Diagnóstico: ${clinica.getPacientes()[5].getDiagnOstico()}`)
    console.log(`Paciente 7 Diagnóstico: ${clinica.getPacientes()[6].getDiagnOstico()}`)

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