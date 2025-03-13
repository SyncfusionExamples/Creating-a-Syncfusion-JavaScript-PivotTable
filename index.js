ej.base.enableRipple(false);
var pivotData = [
    { "Region": "North America", "Category": "Electronics", "Sales": 5000 },
    { "Region": "Europe", "Category": "Electronics", "Sales": 7000 },
    { "Region": "Europe", "Category": "Clothing", "Sales": 6000 },
    { "Region": "Asia", "Category": "Clothing", "Sales": 3000 },
    { "Region": "North America", "Category": "Clothing", "Sales": 2000 },
    { "Region": "Asia", "Category": "Electronics", "Sales": 10000 },
];
var pivotObj = new ej.pivotview.PivotView({
    dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Category' }],
        rows: [{ name: 'Region' }],
        values: [{ name: 'Sales', caption: 'Total Sales' }]
    }
});
pivotObj.appendTo('#PivotTable');