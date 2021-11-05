renderData();

function renderData() {
    d3.select('tbody').html('');

    var filters = ['datetime','city','state','country','shape'];

    let filtered = data;

    filters.forEach(id => {
        var selected = d3.select('#'+id).node().value;

        if (selected){
            filtered = filtered.filter(obj=>obj.id==selected)
        };
    });

    filtered.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val=>{
            row.append('td').text(val)
        })
    });
};