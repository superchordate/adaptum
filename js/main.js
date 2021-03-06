$(document).ready(buildChart);

function buildChart(){

    randomizer = function (range_max, length, slope) {
        slope = slope ? slope : 0;
        values = [];
        for (var i = 0; i < length; i++) { values.push(Math.round(slope * i + Math.random() * range_max)); }
        return values;
    };
    
    //Data. Rows should represent unique entities, while columns represent parameters on those entities.
    var chart_dna_spider = {
        header: "Chart 1: A<strong>Spider</strong> Chart",
        subheader: "Interestingly, this is the <strong>first</strong> chart built in the adaptum framework.",
        columns: { label: "Metrics", values: ["Strength", "Intelligence", "Charisma", "Dexterity", "Luck"] },
        rows: [
            { label: "Germany", values: randomizer(20, 5) },
            { label: "Argentina", values: randomizer(20, 5) },
            { label: "United States", values: randomizer(20, 5) }
        ]
    };

    //Chart DNA contains both data and metadata necessary to build the chart.
    var chart_dna_bar = {
        header: "Chart 2: A <strong>Bar</strong> Chart", //Can be left blank.
        subheader: "Interestingly, this is the <strong>second</strong> chart built in the adaptum framework.", //Can be left blank.
        columns: { label: "Metrics", values: ["Found", "Searching", "Lost"] },
        rows: [
            { label: "January", values: randomizer(20, 3) },
            { label: "February", values: randomizer(20, 3, 1) },
            { label: "March", values: randomizer(20, 3, 2) },
            { label: "April", values: randomizer(20, 3, 3) },
            { label: "May", values: randomizer(20, 3, 4) },
            { label: "June", values: randomizer(20, 3, 5) },
            { label: "July", values: randomizer(20, 3, 6) }
        ]
    };

    //Chart DNA contains both data and metadata necessary to build the chart.
    var chart_dna_line = {
        header: "Chart 3: A <strong>Line</strong> Chart", //Can be left blank.
        subheader: "Interestingly, this is the <strong>third</strong> chart built in the adaptum framework.", //Can be left blank.
        columns: { label: "Metrics", values: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "October", "December"] },
        rows: [
            { label: "Apples", values: randomizer(30, 12, 4) },
            { label: "Oranges", values: randomizer(20, 12, 10) },
            { label: "Poachers", values: randomizer(20, 12, 20) }
        ]
    };

    //Set config options.
    adaptum.config.size = 300;
    adaptum.chartMe(chart_dna_spider, "chart");
    adaptum.chartMe(chart_dna_bar, "chart");
    adaptum.chartMe(chart_dna_line, "chart");

}