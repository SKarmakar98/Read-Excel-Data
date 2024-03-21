async function GetData() {
    // Assuming the Excel file is in the same directory and named "Examples.xlsx"
    let response = await fetch("Examples.xlsx");
    let data = await response.arrayBuffer();
    let workbook = XLSX.read(data, { type: 'json' });

    // Assuming the Excel file contains only one sheet
    let sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Parse the sheet data
    let jsonData = XLSX.utils.sheet_to_json(sheet);

    console.log(jsonData);

    // Process the data as needed
    for (let row of jsonData) {
        console.log(row);
    }
    console.log(jsonData.length);

}
GetData();