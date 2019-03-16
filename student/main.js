var app = new Vue({
    el: "#app",
    data: {
        user: 'Bolin',
        modules: [
            {code:"BT3103",
            url: "https://stattrek.com/probability-distributions/chi-square.aspx"
        },
            {code:"BT2101",
            url: "https://www.youtube.com/watch?v=zi16nl82AMA&list=PLQVvvaa0QuDf2JswnfiGkliBInZnIC4HL&index=11"
        },
            {code:"IS2101",
            url: "https://www.youtube.com/watch?v=zi16nl82AMA&list=PLQVvvaa0QuDf2JswnfiGkliBInZnIC4HL&index=11"
        }
        ]
    }
})


/* Vue.component('Modules',{
    props: {
        message:{
            type: String,
            required: true,
            default: "hi"
        }
    }
    template: `
        <div>
            <div> {{message}}</div>
            <a> course info </a>
            <a> Find Me Teammate </a>
        </div>
        `,

    data(){
        return {[
            "BT3103", "BT2101", "IS2101"
        ]}
    }
})
*/
