/*
###COMO LLEGAR AL LUGAR DONDE EDITAR Y EJEUTAR EL SCRIPT:
Entro al link de sap
Voy a los Flavors (la P)
Selecciono TEST LEO
CREATE SALES ORDER: INITIAL SCREEN:
	primer campo: ZCSO
	TEUS
	56
	division 00
	ENTER
Comercial Order -> click en un campo en blanco abajo de "Material", y clickear los dos cuadraditos de la derecha.
# Si hay algun error pongo el clinte 30007507
Material = td-template
Plant = Teno
Configuration (F8)
Confible

En un material apreto f4, le doy al dropdown de la derecha arriba, y elijo la última opción.

DESBLOQUEAR ORDEN --> En el campo de busquedas escribo /nsm12 en esa DYNPRO click en List, selecciono todas y le doy al tachito.

OBJETIVO: Buscar la palabra ingresada entre los campos y seleccionarla. Hay que escrolear piorque pueden haber miles de campos. Lo Estoy
haciendo en el campo ENDS de Confible.

//                          SCRIPT PARA LLEGAR A MATERIALS EN VA01 desde TEST LEO, despues de hacer click en Create sales order.<------------- FUncionAAAAA
//Primera Pantalla
session.findById("wnd[0]/usr/ctxtVBAK-VKORG").text = "TEUS";
session.findById("wnd[0]/usr/ctxtVBAK-VTWEG").text = "56";
session.findById("wnd[0]/usr/ctxtVBAK-VTWEG").text = "56";
session.findById("wnd[0]/usr/ctxtVBAK-VTWEG").setFocus();
session.findById("wnd[0]").sendVKey(0);

//Segunda Pantalla
session.findById("wnd[0]/usr/subSUBSCREEN_HEADER:SAPMV45A:4021/subPART-SUB:SAPMV45A:4701/ctxtKUAGV-KUNNR").text = "30007507";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/ctxtRV45A-KETDAT").setFocus();
session.findById("wnd[0]").sendVKey(0);

session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/ctxtRV45A-KETDAT").setFocus();
session.findById("wnd[0]").sendVKey(0);

session.findById("wnd[0]").sendVKey(4);

session.findById("wnd[1]/usr/btnPUSHB_PICK").press();

session.findById("wnd[0]").sendVKey(0);

//Completar lo de material (sigo en la segunda pantalla)
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/ctxtRV45A-MABNR[2,0]").text = "TDTBSPINBO000C0001";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/txtRV45A-KWMENG[3,0]").text = "10";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/ctxtVBAP-VRKME[4,0]").text = "PZA";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/ctxtVBAP-WERKS[9,0]").text = "MY10";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/ctxtVBAP-WERKS[9,0]").text = "MY10";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/txtVBAP-ARKTX[6,0]").text = " ";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/txtVBAP-POSNR[0,0]").text = "    ";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/txtVBAP-ARKTX[6,0]").text = "";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/tblSAPMV45ATCTRL_U_MILL_SE_KONFIG/ctxtVBAP-WERKS[9,0]").text = "MY10";
session.findById("wnd[0]/usr/tabsTAXI_TABSTRIP_OVERVIEW/tabpT\\08/ssubSUBSCREEN_BODY:SAPMV45A:7901/subSUBSCREEN_TC:SAPMV45A:7905/subSUBSCREEN_BUTTONS:SAPMV45A:4050/btnBT_POCO").press();
//FIN, LLEGUE DONDE QUERíA

*/

//Lo puedo hacer como el search de SAP, que te muestra lo que buscabas como primera fila, sin seleccionarlo.
/******************** PROGRAMA DEFINITIVO QUE FUNCIONA. PONERLO EN TODOS ********************************/

// Varibles_Globales: Dependen de cada DYNPRO.
//Variable para almacenar el identificador de la tabla.
var selectedTable = session.findById("wnd[1]/usr/tblSAPLCEI0VALUE_S");
//text del campo a buscar
var campo_buscado = session.findById("wnd[1]/usr/txtPersonas_148526179032989").text;
//text del DropDown. Tienen que ser "Igual" o "Contiene" (la primera letra en Mayúscula).
var valorDD = session.findById("wnd[1]/usr/cmbPersonas_148526176833572").text;
/*columnas: 0 es para seleccionar, 1 es el numero, 2 es donde estan los campos con los nombres donde buscar.
Se usan como--> session.findById(columna_X+fila+"]").Atributo_o_Metodo;*/
var columna_0 = "wnd[1]/usr/tblSAPLCEI0VALUE_S/radRCTMS-SEL01[0,";
var columna_1 = "wnd[1]/usr/tblSAPLCEI0VALUE_S/txtRCTMS-ATWRT[1,";
var columna_2 = "wnd[1]/usr/tblSAPLCEI0VALUE_S/txtRCTMS-ATWTB[2,";
// FIN de Variables_Globales.


function Primera_fila_seleccionada(){
	selectedTable.firstVisibleRow = 0;
	var error_messege = "Una fila ya se encuentra seleccionada. Por favor cierre y abra la ventana, y repita la búsqueda";
	//Verifica que la primera fila sea la que está seleccionada.
	var canSearch = session.findById(columna_0+"0]").selected;
	if (!canSearch){
		// Si no está seleccionada la primera fila, se cierra y abre la ventana para que quede seleccionada
		alert(error_messege);
		return false;
	}
	return true;
}//HECHA GENERICA

function Validar_campo_buscado(){
	//Validacion del campo
	if (campo_buscado == ""){
		return null;
	}
	//El campo a buscar se pasa a Mayusculas porque los valores a buscar están en mayúsculas.
	return campo_buscado.toUpperCase();
}//HECHA GENERICA

function Valor_encontrado(colName, rowIndex){
	var cadena_seleccionar;
	// Obtengo el valor de cada celda donde buscar.
	var cellValue = selectedTable.getCellValue(rowIndex, colName);
	//Verifico si eligió Contiene o Igual
	if (valorDD == "Contiene"){ //Se usa el Text del DropDown.
		if (cellValue.includes(campo_buscado)) {
			//La fila del valor es relativa a las filas visibles, no a todas las filas de la tabla.
			visibleRowIndex = rowIndex % selectedTable.visibleRowCount;;
			var posible_valor = session.findById(columna_2 + visibleRowIndex + "]").text;
			var terminar_busqueda = confirm("Si el valor Buscado es "+ posible_valor + " presione OK. En caso contrario presione Cancel.");
			if (terminar_busqueda){
				selectedTable.firstVisibleRow = rowIndex;
				cadena_seleccionar = columna_0 + 0 + "]";       
				session.findById(cadena_seleccionar).select();
				return true;
			}
		}
	}
	else if (valorDD == "Igual"){ //Se usa el Text del DropDown.
		if (cellValue == campo_buscado){
			selectedTable.firstVisibleRow = rowIndex;
			cadena_seleccionar = columna_0 + 0 + "]";  
			session.findById(cadena_seleccionar).select();
			return true;
		}
	}
	return false;
}//HECHA GENERICA

function Buscar(){
	//El nombre de la columna sirve para getCellValue.
	var colName = selectedTable.columns.elementAt(2).name;
	if (selectedTable.rowCount > 0) {
		//Setea la primer fila visible
		selectedTable.firstVisibleRow = 0;
		//Guarda el valor de la última fila visible
		var topRow = selectedTable.visibleRowCount - 1;
		//Iterar a través de las filas.
		for (var rowIndex = 0; rowIndex < selectedTable.rowCount; rowIndex++) {
			if (rowIndex+1 % 2000 == 0){
				if (!confirm("Se ha buscado a través de "+rowIndex+ " filas. Si desea continuar la búsqueda presione OK.")){
					alert("La búsqueda se ha finalizado.");
					return true;
				}
			}
			//Esto sirve para scrollear en la tabla.
			if (rowIndex > topRow) {
				// Setea la primer fila visible al siguiente set de filas. 
				if (topRow + selectedTable.visibleRowCount > selectedTable.rowCount) {
					selectedTable.firstVisibleRow = selectedTable.rowCount - selectedTable.visibleRowCount;
				} else {
					// Si el siguiente set va más allá de la ultima fila, lo ajusta para que la última fila visible sea la última fila de la tabla. 
					selectedTable.firstVisibleRow = topRow + 1;
				}
				topRow += selectedTable.visibleRowCount;
			}
			if (Valor_encontrado(colName, rowIndex)){
				return true;
			}
		}
	}
	return false;
}// HECHA GENERICA

function Programa(){
	selectedTable.firstVisibleRow = 0;

	//Si no está seleccionada la primer fila, tiene errores.
	if (!Primera_fila_seleccionada()){
		return;
	}
	
	//Validacion del campo donde ingresa el valor a buscar.
	campo_buscado = Validar_campo_buscado();
	if (!campo_buscado){
		alert("Ingrese un valor a buscar.");
		return;
	}
	
	//Validar el valor del DropDown.
	if (!valorDD){
		alert("Seleccione un tipo de búsqueda. Igual o Contiene.");
		return;
	}
	
	//La funcion donde se busca el valor.
	if (Buscar()){
		return;
	}
	alert("El valor buscado no se encuentra en la tabla.");
	selectedTable.firstVisibleRow = 0;
}

Programa();
