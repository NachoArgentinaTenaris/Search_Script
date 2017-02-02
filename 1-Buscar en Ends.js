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

Desbloquear Orden --> En el campo de busquedas escribo /nsm12 en esa DYNPRO click en List, selecciono todas y le doy al tachito.

OBJETIVO: Buscar la palabra ingresada entre los campos y seleccionarla. Hay que escrolear piorque pueden haber miles de campos. Lo Estoy
haciendo en el campo ENDS de Confible.

*/

/* Cierra la ventana que aparece cuando apretas F4 cuando está seleccionado "Ends" y la vuelve a abrir */
function Cerrar_Abrir_Ends(){
	//Cierro la ventana
	session.findById("wnd[1]").close();
	//La vuelvo a abrir para poder buscar.
	var ends_table = session.findById("wnd[0]/usr/tabsTABSTRIP_CHAR/tabpTAB3/ssubCHARACTERISTICS:/TENR/SAPLGF_CEI0:1400/tbl/TENR/SAPLGF_CEI0CHARACTER_VALUES");
	//Setea la primera fila de la pestaña "Confble" como la visible
	ends_table.firstVisibleRow = 0;
	//Como la primera fial es la visible, el campo "Ends" siempre va a ser el 4to.
	var ends_box = session.findById("wnd[0]/usr/tabsTABSTRIP_CHAR/tabpTAB3/ssubCHARACTERISTICS:/TENR/SAPLGF_CEI0:1400/tbl/TENR/SAPLGF_CEI0CHARACTER_VALUES/ctxtRCTMS-MWERT[1,4]"); 
	//Abre la ventana donde está el boton de este script.
	ends_box.setFocus();
	ends_box.pressF4();
	
} 

function Validar_primera_fila(){
	//Verifica que la primera fila sea la que está seleccionada.
	var canSearch = session.findById("wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S/radRCTMS-SEL01[0,0]").selected;
	if (!canSearch){
		// Si no está seleccionada la primera fila, se cierra y abre la ventana para que quede seleccionada
		Cerrar_Abrir_Ends();
	}
	else{
		// primera fila char value y segunda fila char value. Char value es el nombre de la columna
		var pf_char_value = session.findById("wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S/txtRCTMS-ATWRT[1,0]").text;
		var sf_char_value = session.findById("wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S/txtRCTMS-ATWRT[1,1]").text;
		// Si se selecciona un valor y se scrollea, ese se vuelve el primero y rompe la busqueda.
		if (pf_char_value != "" || sf_char_value != "001"){
			Cerrar_Abrir_Ends();
		}
	}
}

function Validar_campo_buscado(){
	var campo_buscado = session.findById("wnd[1]/usr/txtPersonas_148415066797028").text;
	//Validacion del campo
	if (campo_buscado == ""){
		return null;
	}
	//El campo a buscar se pasa a Mayusculas porque los valores a buscar están en mayúsculas.
	return campo_buscado.toUpperCase();
}

function Valor_encontrado(selectedTable, campo_buscado, valorDD, colName, rowIndex){
	// Obtengo el valor de cada celda donde buscar.
	var cellValue = selectedTable.getCellValue(rowIndex, colName);
	//Verifico si eligió Contiene o Igual
	if (valorDD == "01"){ //01 es "contiene".
		if (cellValue.includes(campo_buscado)) {
			//La fila del valor es relativa a las filas visibles, no a todas las filas de la tabla.
			visibleRowIndex = rowIndex % 10;
			var posible_valor = session.findById("wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S/txtRCTMS-ATWTB[2," + visibleRowIndex + "]").text;
			var terminar_busqueda = confirm("Elija OK si el valor Buscado es "+ posible_valor + ". En caso contrario persione Cancel.");
			if (terminar_busqueda){
				cadena_seleccionar = "wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S/radRCTMS-SEL01[0," + visibleRowIndex + "]";       
				session.findById(cadena_seleccionar).select();
				return true;
			}
		}
	}
	else if (valorDD == "02"){ //02 es "igual".
		if (cellValue == campo_buscado){
			visibleRowIndex = rowIndex % 10;
			cadena_seleccionar = "wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S/radRCTMS-SEL01[0," + visibleRowIndex + "]";       
			session.findById(cadena_seleccionar).select();
			return true;
		}
	}
	return false;
}

function Buscar(selectedTable, campo_buscado, valorDD){
	//El nombre de la columna sirve para getCellValue.
	var colName = selectedTable.columns.elementAt(2).name;
	if (selectedTable.rowCount > 0) {
		//Setea la primer fila visible
		selectedTable.firstVisibleRow = 0;
		//Guarda el valor de la última fila visible
		var topRow = selectedTable.visibleRowCount - 1;
		//Iterar a través de las filas.
		for (var rowIndex = 0; rowIndex < selectedTable.rowCount; rowIndex++) {
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
			var valor_hallado = Valor_encontrado(selectedTable, campo_buscado, valorDD, colName, rowIndex);
			if (valor_hallado){
				return true;
			}
		}
	}
	return false;
}

function Programa(){
	//Variable para almacenar el identificador de la tabla.
	var selectedTable = session.findById("wnd[1]/usr/tbl/TENR/SAPLGF_CEI0VALUE_S");

	//Si no está seleccionada la primer fila, tiene errores.
	Validar_primera_fila();
	
	//Validacion del campo donde ingresa el valor a buscar.
	var campo_buscado = Validar_campo_buscado();
	if (!campo_buscado){
		alert("Ingrese un valor a buscar.");
		return;
	}
	
	//Obtener y validar el valor del DropDown.
	var valorDD = session.findById("wnd[1]/usr/cmbPersonas_148416420409539").key;
	if (!valorDD){
		alert("Seleccione un tipo de búsqueda. Igual o Contiene.");
		return;
	}
	
	//La funcion donde se busca el valor.
	var busqueda_exitosa = Buscar(selectedTable, campo_buscado, valorDD);
	if (busqueda_exitosa){
		return;
	}
	alert("El valor buscado no se encuentra en la tabla. Modifique el valor y repita la búsqueda");
	//Si el valor buscado no está en la tabla, la cierra y abre para otra búsqueda.
	Cerrar_Abrir_Ends();
}

Programa();
